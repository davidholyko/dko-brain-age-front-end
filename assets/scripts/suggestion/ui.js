'use strict'

// const store = require('../store')
const updateSuggestionTemplate = require('../handlebars/my-suggestion-update.handlebars')
const showSuggestionsTemplate = require('../handlebars/suggestions.handlebars')
const showMySuggestionsTemplate = require('../handlebars/my-suggestions.handlebars')

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
  $('#suggestions').append(showMySuggestionsTemplate({suggestions: responseData.user.suggestions}))
}

const deleteSuggestionSuccess = (id) => {
  console.log('deleteSuggestionSuccess')
  $(`#suggestion-${id}`).empty()
}

const updateSuggestionSuccess = (data, id) => {
  console.log('updateSuggestionSuccess')
  const suggestion = {suggestion: {text: data.suggestion.text, id: id}}
  $(`#suggestion-${id}`).replaceWith(updateSuggestionTemplate(suggestion))
}

module.exports = {
  failure,
  createSuggestionSuccess,
  showSuggestionSuccess,
  showMySuggestionSuccess,
  deleteSuggestionSuccess,
  updateSuggestionSuccess
}
