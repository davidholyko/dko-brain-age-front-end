'use strict'

const store = require('../store')
const client = require('../client-side/events')
const logicController = require('../logic/controller')
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const startGame = () => {
  console.log('startGame')
  if (store.game.start && !store.game.over) { return }
  client.resetStore()
  client.resetHearts()
  client.resetScore()
  client.startGame()
  client.startTimer()
  client.allowSubmission()
  logicController[Math.random() * Object.keys(logicController).length | 0]()
  client.updateGameDisplay()
  $('#game-score').html(`<h1>Your score is: ${store.game.score}</h1>`)
  $('#game-timer').html(`<h1>Time left: ${store.game.countdown} seconds</h1>`)
}

const answerProblem = () => {
  console.log('answerProblem')
  event.preventDefault()
  if (!store.game.start) { return }
  if (store.game.over) { return }

  if ($(event.target).text() === store.game.answer.toString()) {
    store.game.score++
    $('#game-score').html(`<h1>Your score is: ${store.game.score}</h1>`)
  } else {
    $($('#game-hearts').children()[store.game.hearts - 1]).attr('src', 'public/images/empty-heart.png')
    store.game.hearts--
    if (!store.game.hearts) {
      store.game.over = true
      client.stopTimer()
    }
  }
  logicController[Math.random() * Object.keys(logicController).length | 0]()
  client.updateGameDisplay()
}

const onSubmitScore = () => {
  event.preventDefault()
  if (!store.game.submit) { return }
  console.log('submitScore')
  client.forbidSubmission()
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

const onGetMyScores = () => {
  console.log('onGetUserScores')
  event.preventDefault()
  api.getMyScores()
    .then(ui.getMyScoresSuccess)
    .catch(ui.failure)
}

const onGetHighScores = () => {
  console.log('onGetHighScores')
  event.preventDefault()
  api.getHighScores()
    .then(ui.getScoresSuccess)
    .catch(ui.failure)
}

const onDeleteScore = () => {
  console.log('onDeleteScore')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteScore(data)
    .then(ui.deleteScoreSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('.option').on('click', answerProblem)
  $('#game-start-button').on('click', startGame)
  $('#submit-score-button').on('click', onSubmitScore)
  $('#all-scores-button').on('click', onGetScores)
  $('#high-scores-button').on('click', onGetHighScores)
  $('#my-scores-button').on('click', onGetMyScores)
  $('#delete-score-form').on('submit', onDeleteScore)
}

module.exports = { addHandlers }
