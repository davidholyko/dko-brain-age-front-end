'use strict'

const config = require('../config')
const store = require('../store')

const submitScore = () => {
  console.log('submitScore')
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'POST',
    data: {
      'game': {
        'score': store.game.score
      }
    }
  })
}

const getScores = () => {
  console.log('getScores')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET'
  })
}

const getHighScores = () => {
  console.log('getHighScores')
  return $.ajax({
    url: config.apiUrl + '/highscores',
    method: 'GET'
  })
}

const getMyScores = () => {
  console.log('getMyScores')
  return $.ajax({
    url: config.apiUrl + `/users/${store.user.handle}`,
    method: 'GET'
  })
}

const deleteScore = data => {
  console.log('getMyScores')
  console.log(data)
  return $.ajax({
    url: config.apiUrl + `/games/${data.game.id}`,
    method: 'DELETE'
  })
}

module.exports = {
  submitScore,
  getScores,
  getHighScores,
  getMyScores,
  deleteScore
}
