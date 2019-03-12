'use strict'

// const store = require('../store')
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
  $(`#suggestion-${id}`).hide()
}

const updateSuggestionSuccess = (data, id) => {
  console.log('updateSuggestionSuccess')
  $(`#suggestion-${id}`).replaceWith(`<h2>${data.suggestion.text}</h2>`)
}

module.exports = {
  failure,
  createSuggestionSuccess,
  showSuggestionSuccess,
  showMySuggestionSuccess,
  deleteSuggestionSuccess,
  updateSuggestionSuccess
}
