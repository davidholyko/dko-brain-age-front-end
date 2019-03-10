'use strict'
//
// const store = require('../store')
const showScoreTemplate = require('../handlebars/scores.handlebars')

const failure = () => {
  console.log('failure')
}

const submitScoreSuccess = () => {
  console.log('submitScoreSuccess')
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

module.exports = {
  failure,
  submitScoreSuccess,
  getScoresSuccess,
  getHighScoresSuccess
}
