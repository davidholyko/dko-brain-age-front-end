'use strict'

const store = require('../store')
const storeActions = require('../client-side/store-actions')
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const stats = require('../stats/stats')
const graph = require('../stats/graph')

const onSubmitScore = () => {
  console.log('submitScore')
  if (!store.game.submit) { return }
  storeActions.forbidSubmission()
  api.submitScore()
    .then(ui.submitScoreSuccess)
    .catch(ui.failure)
}

const onGetScores = () => {
  console.log('onGetScores')
  if (event) { event.preventDefault() }
  api.getScores()
    .then(ui.getScoresSuccess)
    .then(stats.calcAll)
    .then(graph.generateBarChart)
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
  console.log('addHandlers Game')
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
