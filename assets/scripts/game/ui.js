'use strict'

// const store = require('../store')
const showScoreTemplate = require('../handlebars/scores.handlebars')
const showMyScoreTemplate = require('../handlebars/my-scores.handlebars')
const client = require('../client-side/events')

const failure = () => {
  console.log('failure')
}

const submitScoreSuccess = () => {
  console.log('submitScoreSuccess')
  client.resetStore()
}

const getScoresSuccess = responseData => {
  console.log('getScoreSuccess')
  $('#scores').empty()
  const showScores = showScoreTemplate({games: responseData.games})
  $('#scores').append(showScores)
}

const getHighScoresSuccess = responseData => {
  console.log('getScoreSuccess')
  $('#scores').empty()
  const showScores = showScoreTemplate({games: responseData.games})
  $('#scores').append(showScores)
}

const getMyScoresSuccess = responseData => {
  console.log('getMyScoresSuccess')
  $('#scores').empty()
  const showMyScores = showMyScoreTemplate({games: responseData.user.games})
  $('#scores').append(showMyScores)
}

const deleteScoreSuccess = () => {
  console.log('deleteScoreSuccess')
}

module.exports = {
  failure,
  submitScoreSuccess,
  getScoresSuccess,
  getHighScoresSuccess,
  getMyScoresSuccess,
  deleteScoreSuccess
}
