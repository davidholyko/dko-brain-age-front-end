'use strict'

// const store = require('../store')
const client = require('../client-side/events')
const showSuggestionsTemplate = require('../handlebars/suggestions.handlebars')

const failure = () => {
  console.log('failure')
}

const createSuggestionSuccess = () => {
  console.log('createSuggestionSuccess')
}

const showSuggestionSuccess = responseData => {
  console.log('showSuggestionSuccess')
  $('#suggestions').empty()
  const showSuggestions = showSuggestionsTemplate({suggestions: responseData.suggestions})
  $('#suggestions').append(showSuggestions)
}

const deleteSuggestionSuccess = () => {
  console.log('deleteSuggestionSuccess')
}

const updateSuggestionSuccess = responseData => {
  console.log('updateSuggestionSuccess')
}

module.exports = {
  failure,
  createSuggestionSuccess,
  showSuggestionSuccess,
  deleteSuggestionSuccess,
  updateSuggestionSuccess
}
