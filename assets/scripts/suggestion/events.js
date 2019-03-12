'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateSuggestion = () => {
  console.log('onCreateSuggestion')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createSuggestion(data)
    .then(ui.createSuggestionSuccess)
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
  api.deleteSuggestion(data)
    .then(ui.deleteSuggestionSuccess(data))
    .catch(ui.failure)
}

const onShowSuggestion = () => {
  console.log('onShowSuggestion')
  event.preventDefault()
  api.showSuggestion()
    .then(ui.showSuggestionSuccess)
    .catch(ui.failure)
}

const onShowMySuggestion = () => {
  console.log('onShowSuggestion')
  event.preventDefault()
  api.showMySuggestion()
    .then(ui.showMySuggestionSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  console.log('addHandlers Suggestions')
  $('#create-suggestion-form').on('submit', onCreateSuggestion)
  $('#show-all-suggestion-button').on('click', onShowSuggestion)
  $('#show-my-suggestion-button').on('click', onShowMySuggestion)

  $('#suggestions').on('click', '.delete-suggestion-button', onDeleteSuggestion)
  $('#suggestions').on('submit', '.update-suggestion-form', onUpdateSuggestion)
}

module.exports = { addHandlers }
