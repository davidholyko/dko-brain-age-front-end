'use strict'

const config = require('../config')
const store = require('../store')

const submitScore = () => {
  // console.log('newGame')
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

module.exports = {
  submitScore
}
