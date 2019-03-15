'use strict'

const store = require('../store')
const storeActions = require('../client-side/store-actions')
const htmlActions = require('../client-side/html-actions')
const timerActions = require('../client-side/timer-actions')
const logicController = require('../logic/controller')
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const view = require('../view/view')
const stats = require('../stats/stats')
const graph = require('../stats/graph')

const startPlaying = () => {
  // console.log('startPlaying')
  if (store.game.start && !store.game.over) { return }
  storeActions.resetStore()
  storeActions.resetHearts()
  storeActions.resetScore()
  timerActions.startGame()
  startTimer()
  storeActions.allowSubmission()

  logicController[Math.random() * Object.keys(logicController).length | 0]()
  htmlActions.updateGameDisplay()
  view.startGame()
  view.unshadeGameDisplay()

  $('.option').show()
  $('#game-score').html(`<h3>Your score is: ${store.game.score}</h3>`)
  $('#game-timer').html(`<h3>Time left: ${store.game.countdown} seconds</h3>`)
}

const stopPlaying = () => {
  console.log('stopPlaying')
  $('.option').hide()
  timerActions.stopTimer()
  view.shadeGameDisplay()
  store.game.over = true
  if (store.user) {
    onSubmitScore()
    onGetScores()
  }
}

const answerProblem = () => {
  // console.log('answerProblem')
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
      stopPlaying()
    }
  }

  logicController[Math.random() * Object.keys(logicController).length | 0]()
  htmlActions.updateGameDisplay()
}

const onSubmitScore = () => {
  // console.log('submitScore')
  if (!store.game.submit) { return }
  storeActions.forbidSubmission()
  api.submitScore()
    .then(ui.submitScoreSuccess)
    .catch(ui.failure)
}

const onGetScores = () => {
  // console.log('onGetScores')
  if (event) { event.preventDefault() }
  api.getScores()
    .then(ui.getScoresSuccess)
    .then(stats.calcAll)
    .then(graph.generateBarChart)
    .catch(ui.failure)
}

const onGetMyScores = () => {
  // console.log('onGetUserScores')
  event.preventDefault()
  api.getMyScores()
    .then(ui.getMyScoresSuccess)
    .catch(ui.failure)
}

const onGetHighScores = () => {
  // console.log('onGetHighScores')
  event.preventDefault()
  api.getHighScores()
    .then(ui.getScoresSuccess)
    .catch(ui.failure)
}

const onDeleteScore = () => {
  // console.log('onDeleteScore')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteScore(data)
    .then(ui.deleteScoreSuccess)
    .catch(ui.failure)
}

const startTimer = () => {
  // console.log('setGameTimer')
  clearInterval(store.game.timer)
  const start = Date.now()
  const end = start + (store.game.countdown * 1000)
  let now

  store.game.timer = setInterval(() => {
    now = Date.now()
    if (now > end || !store.game.hearts) {
      clearInterval(store.game.timer)
      $('#game-timer').html(`<h3>Game over!</h3>`)
      $('#game-display').append('<h3>Want to play again? Click here</h3>')
      stopPlaying()
    }
    $('#game-timer').html(`<h3>Time remaining in seconds: ${((end - now) / 1000).toString().slice(0, -2)}</h3>`)
    if ($('#game-timer').text() === 'Time remaining in seconds: -0.0') { $('#game-timer').html(`<h3>Game over!</h3>`) }
  }, 1)
}

const addHandlers = () => {
  // console.log('addHandlers Game')
  $('.option').on('click', answerProblem)
  $('.game-start-button').on('click', startPlaying)
  $('#all-scores-button').on('click', onGetScores)
  $('#hiscores-button').on('click', onGetHighScores)
  $('#my-scores-button').on('click', onGetMyScores)
  $('#delete-score-form').on('submit', onDeleteScore)
}

module.exports = {
  addHandlers,
  onGetScores,
  onSubmitScore
}
