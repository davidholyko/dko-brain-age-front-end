'use strict'

// const store = require('../store')
const client = require('../client-side/events')

const failure = () => {
  console.log('failure')
}

const createSuggestionSuccess = responseData => {
  console.log('createSuggestionSuccess')
}

module.exports = {
  failure,
  createSuggestionSuccess
}
