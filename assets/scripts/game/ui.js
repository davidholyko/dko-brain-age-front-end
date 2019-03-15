'use strict'

// const store = require('../store')
const showScoreTemplate = require('../handlebars/scores.handlebars')
const showMyScoreTemplate = require('../handlebars/my-scores.handlebars')
const client = require('../client-side/store-actions')
const store = require('../store')

const failure = () => {
  console.log('failure')
  $('#user-feedback').text('Something went wrong. Please try again')
  $('#user-feedback').addClass('error')
  for (let i = 0; i < 2000; i += 200) { setTimeout(() => { $('#user-feedback').toggleClass('error-toggle') }, i) }
  setTimeout(() => { $('#user-feedback').empty() }, 2000)
}

const submitScoreSuccess = () => {
  console.log('submitScoreSuccess')
  client.resetStore()
}

const getScoresSuccess = responseData => {
  console.log('getScoreSuccess')
  store.data = responseData
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
