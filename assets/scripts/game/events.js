'use strict'

const logicMath = require('../logic/math')
const store = require('../store')

const startGame = () => {
  console.log('startGame')
  logicMath.generateMathProblem()
}

const answerMathProblem = () => {
  console.log('answerMathProblem')
  event.preventDefault()

  const selection = $(event.target).text()
  const answer = store.game.answer

  console.log(`selection: ${selection}`)
  console.log(`answer: ${answer}`)

  if ($(event.target).text() === store.game.answer.toString()) {
    store.game.score++
    $('#game-score').html(`<h1>Your score is: ${store.game.score}</h1>`)
    console.log('answer is correct')
  } else {
    $($('#game-hearts').children()[store.game.hearts]).attr('src', '/public/images/empty-heart.png')
    store.game.hearts--
  }
  logicMath.generateMathProblem()
}

const setGameTimer = () => {
  console.log('setGameTimer')

  setInterval(() => {
    store.game.timer--
    $('#game-timer').text(`TIME LEFT: ${store.game.timer}`)
  }, 1000)
}

const addHandlers = () => {
  $('.option').on('click', answerMathProblem)
  $('#game-start-button').on('click', startGame)
}

module.exports = {
  addHandlers,
  setGameTimer
}
