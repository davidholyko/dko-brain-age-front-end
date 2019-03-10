'use strict'

const logicMath = require('../logic/math')
const store = require('../store')
const client = require('../client-side/events')
const api = require('./api')
const ui = require('./ui')

const startGame = () => {
  console.log('startGame')
  client.resetStore()
  client.resetHearts()
  client.resetScore()
  client.startGame()
  client.startTimer()
  logicMath.generateMathProblem()
  $('#game-score').html(`<h1>Your score is: ${store.game.score}</h1>`)
  $('#game-timer').html(`<h1>Time left: ${store.game.countdown} seconds</h1>`)
}

const answerMathProblem = () => {
  console.log('answerMathProblem')
  event.preventDefault()
  if (!store.game.start) { return }
  if (store.game.over) { return }

  if ($(event.target).text() === store.game.answer.toString()) {
    store.game.score++
    $('#game-score').html(`<h1>Your score is: ${store.game.score}</h1>`)
  } else {
    $($('#game-hearts').children()[store.game.hearts - 1]).attr('src', '/public/images/empty-heart.png')
    store.game.hearts--
    if (!store.game.hearts) {
      store.game.over = true
      client.stopTimer()
      return
    }
  }
  logicMath.generateMathProblem()
}

const onSubmitScore = () => {
  console.log('submitScore')
  event.preventDefault()
  api.submitScore()
    .then(ui.submitScoreSuccess)
    .catch(ui.failure)
}

const onGetScores = () => {
  console.log('onGetScores')
  event.preventDefault()
  api.getScores()
    .then(ui.getScoresSuccess)
    .catch(ui.failure)
}

const onGetHighScores = () => {
  console.log('onGetHighScores')
  event.preventDefault()
  api.getHighScores()
    .then(ui.getHighScoresSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('.option').on('click', answerMathProblem)
  $('#game-start-button').on('click', startGame)
  $('#submit-score-button').on('click', onSubmitScore)
  $('#all-scores-button').on('click', onGetScores)
  $('#high-scores-button').on('click', onGetHighScores)
}

module.exports = {
  addHandlers
}
