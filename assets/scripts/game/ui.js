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
  $('#game-headers-user').show()
}

const getHighScoresSuccess = responseData => {
  console.log('getScoreSuccess')
  $('#scores').empty()
  const showScores = showScoreTemplate({games: responseData.games})
  $('#scores').append(showScores)
  $('#game-headers-user').show()
}

const getMyScoresSuccess = responseData => {
  console.log('getMyScoresSuccess')
  $('#scores').empty()
  $('#scores').append(showMyScoreTemplate({games: responseData.user.games}))
  console.log('working on something')
  $('#game-headers-user').hide()
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
