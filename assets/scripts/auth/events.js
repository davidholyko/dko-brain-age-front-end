'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const gameEvents = require('../game/events')
const suggestionEvents = require('../suggestion/events')

const onSignUp = () => {
  console.log('onSignUp')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(() => { onSignIn(data) })
    .catch(ui.signUpFailure)
}

const onSignIn = data => {
  console.log('onSignIn')
  if (event) {
    event.preventDefault()
    data = getFormFields(event.target)
  }
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

const onChangePassword = () => {
  console.log('onChangePassword')
  event.preventDefault()
  const data = getFormFields(event.target)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}

const onSignOut = () => {
  console.log('onSignOut')
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .then(gameEvents.onGetScores)
    .then(suggestionEvents.onShowSuggestion)
    .catch(ui.failure)
}

const addHandlers = () => {
  console.log('addHandlers Authentication')
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out-button').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
