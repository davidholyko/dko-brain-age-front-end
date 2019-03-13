'use strict'

const store = require('../store')
const view = require('../view/view')

const signUpSuccess = () => {
  console.log('onSignUpSuccess')
  $('form').trigger('reset')
  $('#user-feedback').text('Signed up successfully')
  $('#user-feedback').addClass('success')
  setTimeout(() => { $('#user-feedback').empty() }, 2000)
}

const failure = () => {
  console.log('failure')
  $('form').trigger('reset')
  $('#user-feedback').text('Something went wrong. Please try again')
  $('#user-feedback').addClass('error')
  for (let i = 0; i < 2000; i += 200) { setTimeout(() => { $('#user-feedback').toggleClass('error-toggle') }, i) }
  setTimeout(() => { $('#user-feedback').empty() }, 2000)
}

const signInSuccess = responseData => {
  console.log('onSignInSuccess')
  $('form').trigger('reset')
  store.user = responseData.user
  view.login()
}

const changePasswordSuccess = () => {
  console.log('onChangePasswordSuccess')
  $('form').trigger('reset')
  $('#user-feedback').text('Password changed successfully')
  $('#user-feedback').addClass('success')
  setTimeout(() => { $('#user-feedback').empty() }, 2000)
}

const changePasswordFailure = () => {
  $('#user-feedback').text('Your email and display name must be available.')
  for (let i = 0; i < 2000; i += 200) { setTimeout(() => { $('#user-feedback').toggleClass('error-toggle') }, i) }
  setTimeout(() => { $('#user-feedback').empty() }, 2000)
}

const signOutSuccess = () => {
  console.log('onSignOutSuccess')
  $('form').trigger('reset')
  store.user = null
  view.logout()
}

module.exports = {
  signUpSuccess,
  failure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess
}
