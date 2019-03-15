'use strict'

// const store = require('../store')
const updateSuggestionTemplate = require('../handlebars/my-suggestion-update.handlebars')
const showSuggestionsTemplate = require('../handlebars/suggestions.handlebars')
const showMySuggestionsTemplate = require('../handlebars/my-suggestions.handlebars')
// const view = require('../view/view')

const failure = () => {
  // console.log('failure')
  $('#user-feedback').text('Something went wrong. Please try again')
  $('#user-feedback').addClass('error')
  for (let i = 0; i < 2000; i += 200) { setTimeout(() => { $('#user-feedback').toggleClass('error-toggle') }, i) }
  setTimeout(() => { $('#user-feedback').empty() }, 2000)
}

const createSuggestionSuccess = responseData => {
  // console.log('createSuggestionSuccess')
  $('form').trigger('reset')
  $(`#suggestion`).append(updateSuggestionTemplate(responseData))
}

const showSuggestionSuccess = responseData => {
  // console.log('showSuggestionSuccess')
  $('#suggestions').empty()
  $('#suggestions').append(showSuggestionsTemplate({suggestions: responseData.suggestions}))
  $('#suggestions-header-text').text('All Suggestions')
}

const showMySuggestionSuccess = responseData => {
  // console.log('showMySuggestionSuccess')
  $('#suggestions').empty()
  $('#suggestions').append(showMySuggestionsTemplate({suggestions: responseData.user.suggestions}))
  $('#suggestions-header-text').text('My Suggestions')
}

const deleteSuggestionSuccess = (id) => {
  // console.log('deleteSuggestionSuccess')
  $(`#suggestion-${id}`).empty()
  $('#undo-delete-button').show()
}

const updateSuggestionSuccess = (data, id) => {
  // console.log('updateSuggestionSuccess')
  const suggestion = {suggestion: {text: data.suggestion.text, id: id}}
  $(`#suggestion-${id}`).replaceWith(updateSuggestionTemplate(suggestion))
  $('form').trigger('reset')
}

module.exports = {
  failure,
  createSuggestionSuccess,
  showSuggestionSuccess,
  showMySuggestionSuccess,
  deleteSuggestionSuccess,
  updateSuggestionSuccess
}
