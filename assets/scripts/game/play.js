'use strict'

const store = require('../store')
const htmlActions = require('../client-side/html-actions')
const storeActions = require('../client-side/store-actions')
const timerActions = require('../client-side/timer-actions')
const controller = require('../logic/controller')
const view = require('../view/view')
const gameEvents = require('./events')

const startPlaying = () => {
  console.log('startPlaying')
  if (store.game.start && !store.game.over) { return }
  storeActions.resetStore()
  storeActions.startGame()
  storeActions.allowSubmission()
  timerActions.startTimer()
  controller.generateQuestion()
  htmlActions.resetScore()
  htmlActions.resetHearts()
  htmlActions.updateGameDisplay()
  view.startGame()
  view.unshadeGameDisplay()
  view.showOption()
}

const stopPlaying = () => {
  console.log('stopPlaying')
  timerActions.stopTimer()
  view.hideOption()
  view.shadeGameDisplay()
  store.game.over = true
  if (store.user) {
    gameEvents.onSubmitScore()
    gameEvents.onGetScores()
  }
}

const answerProblem = () => {
  console.log('answerProblem')
  event.preventDefault()
  if (!store.game.start) { return }
  if (store.game.over) { return }

  if ($(event.target).text() === store.game.answer.toString()) {
    store.game.score++
    $('#game-score').html(`<h3>Your score is: ${store.game.score}</h3>`)
  } else {
    $($('#game-hearts').children()[store.game.hearts - 1]).attr('src', 'public/images/empty-heart.png')
    store.game.hearts--
    if (!store.game.hearts) {
      $('#game-timer').html(`<h3>Out of hearts. Game over!</h3>`)
      stopPlaying()
    }
  }

  controller.generateQuestion()
  htmlActions.updateGameDisplay()
}

const addHandlers = () => {
  console.log('addHandlers Game')
  $('.game-start-button').on('click', startPlaying)
  $('.option').on('click', answerProblem)
}

module.exports = {
  addHandlers

}
