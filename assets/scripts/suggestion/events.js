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

const addHandlers = () => {
  $('#create-suggestion-form').on('submit', onCreateSuggestion)
}

module.exports = { addHandlers }
