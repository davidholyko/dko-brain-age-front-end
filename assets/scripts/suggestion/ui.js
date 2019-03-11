'use strict'

// const store = require('../store')
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
  $('#suggestions').append(showSuggestionsTemplate({suggestions: responseData.suggestions}))
}

const showMySuggestionSuccess = responseData => {
  console.log('showMySuggestionSuccess')
  $('#suggestions').empty()
  $('#suggestions').append(showSuggestionsTemplate({suggestions: responseData.user.suggestions}))
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
  showMySuggestionSuccess,
  deleteSuggestionSuccess,
  updateSuggestionSuccess
}
