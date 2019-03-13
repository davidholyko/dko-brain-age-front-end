'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const api = require('./api')
const ui = require('./ui')

const onCreateSuggestion = data => {
  console.log('onCreateSuggestion')

  if (event.type === 'submit') {
    event.preventDefault()
    data = getFormFields(event.target)
  }

  console.log(data)

  api.createSuggestion(data)
    .then(ui.createSuggestionSuccess)
    .then(onShowMySuggestion)
    .catch(ui.failure)
}

const onUpdateSuggestion = () => {
  console.log('onUpdateSuggestion')
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(event.target).data('id')
  api.updateSuggestion(data, id)
    .then(ui.updateSuggestionSuccess(data, id))
    .catch(ui.failure)
}

const onDeleteSuggestion = () => {
  console.log('onDeleteSuggestion')
  event.preventDefault()
  const data = $(event.target).data('id')
  store.suggestions.push($(`#suggestion-text-${data}`).text())
  $('#undo-delete-button').show()
  api.deleteSuggestion(data)
    .then(ui.deleteSuggestionSuccess(data))
    .catch(ui.failure)
}

const onUndoDeleteSuggestion = () => {
  console.log('onUndoDeleteSuggestion')
  event.preventDefault()
  onCreateSuggestion({suggestion: {text: store.suggestions.pop()}})
  if (!store.suggestions.length) { $('#undo-delete-button').hide() }
}

const onShowSuggestion = () => {
  console.log('onShowSuggestion')
  if (event) { event.preventDefault() }
  api.showSuggestion()
    .then(ui.showSuggestionSuccess)
    .catch(ui.failure)
}

const onShowMySuggestion = () => {
  console.log('onShowSuggestion')
  if (event) { event.preventDefault() }
  api.showMySuggestion()
    .then(ui.showMySuggestionSuccess)
    .catch(ui.failure)
}

const onToggleSuggestionsPage = () => {
  console.log('onToggleSuggestionsPage')
  if (store.currentPage === 'game') {
    store.currentPage = 'suggestion'
    $('#suggestions-page').show()
    $('#suggestions-page').css('display', 'flex')
    $('.suggestion').show()
    $('#game-page').hide()
    $('.game').hide()
    $('#toggle-page-button').text('Game Page')
    if (!store.user) {
      $('#show-all-suggestion-button-container').hide()
      $('#show-my-suggestion-button-container').hide()
    }
  } else if (store.currentPage === 'suggestion') {
    store.currentPage = 'game'
    $('#suggestions-page').hide()
    $('.suggestion').hide()
    $('#game-page').show()
    $('.game').show()
    $('#toggle-page-button').text('Suggestion Page')
    if (store.user) {
      $('#show-all-suggestion-button-container').show()
      $('#show-my-suggestion-button-container').show()
    }
  }
}

const addHandlers = () => {
  console.log('addHandlers Suggestions')
  $('#create-suggestion-form').on('submit', onCreateSuggestion)
  $('#show-all-suggestion-button').on('click', onShowSuggestion)
  $('#show-my-suggestion-button').on('click', onShowMySuggestion)
  $('#toggle-page-button').on('click', onToggleSuggestionsPage)
  $('#undo-delete-button').on('click', onUndoDeleteSuggestion)

  $('#suggestions').on('click', '.delete-suggestion-button', onDeleteSuggestion)
  $('#suggestions').on('submit', '.update-suggestion-form', onUpdateSuggestion)

  onShowSuggestion()
}

module.exports = {
  addHandlers,
  onShowSuggestion
}
