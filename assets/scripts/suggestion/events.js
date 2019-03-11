'use strict'

const store = require('../store')
const client = require('../client-side/events')
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
  console.log('onCreateSuggestion')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateSuggestion(data)
    .then(ui.updateSuggestionSuccess)
    .catch(ui.failure)
}

const onDeleteSuggestion = () => {
  console.log('onDeleteSuggestion')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteSuggestion(data)
    .then(ui.deleteSuggestionSuccess)
    .catch(ui.failure)
}

const onShowSuggestion = () => {
  console.log('onShowSuggestion')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showSuggestion(data)
    .then(ui.showSuggestionSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  console.log('addHandlers Suggestions')
  $('#create-suggestion-form').on('submit', onCreateSuggestion)
  $('#update-suggestion-form').on('submit', onUpdateSuggestion)
  $('#delete-suggestion-form').on('submit', onDeleteSuggestion)
  $('#show-all-suggestion-button').on('click', onShowSuggestion)
}

module.exports = { addHandlers }
