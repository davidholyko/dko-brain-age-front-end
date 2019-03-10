'use strict'

const logicMath = require('../logic/math')
const store = require('../store')
const client = require('../client-side/events')

const startGame = () => {
  console.log('startGame')
  client.initStore()
  store.game.start = true
  client.resetHearts()
  client.resetScore()
  client.startGameTimer()
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

const addHandlers = () => {
  $('.option').on('click', answerMathProblem)
  $('#game-start-button').on('click', startGame)
}

module.exports = {
  addHandlers
}
