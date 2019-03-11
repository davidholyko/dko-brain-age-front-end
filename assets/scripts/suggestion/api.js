'use strict'

const config = require('../config')
const store = require('../store')

const createSuggestion = data => {
  console.log('createSuggestion')
  return $.ajax({
    url: config.apiUrl + '/suggestions',
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'POST',
    data: {
      'suggestion': {
        'text': data.suggestion.text
      }
    }
  })
}

module.exports = {
  createSuggestion
}
