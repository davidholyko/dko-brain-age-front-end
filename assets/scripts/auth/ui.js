'use strict'

const store = require('../store')

const signUpSuccess = () => {
  console.log('onSignUpSuccess')
  $('form').trigger('reset')
  $('#user-message').text('SIGN UP')
}

const signUpFailure = () => $('#user-message').text('NOT SIGNED UP')

const signInSuccess = responseData => {
  console.log('onSignInSuccess')
  $('#user-message').text('SIGNED IN')
  $('form').trigger('reset')
  store.user = responseData.user
}

const signInFailure = () => $('#user-message').text('NOT SIGNED IN')

const changePasswordSuccess = () => {
  console.log('onChangePasswordSuccess')
  $('form').trigger('reset')
  $('#user-message').text('PASSWORD CHANGED')
}

const changePasswordFailure = () => $('#user-message').text('PASSWORD NOT CHANGED')

const signOutSuccess = () => {
  console.log('onSignOutSuccess')
  $('#user-message').text('SIGN OUT SUCCESSFUL')
  $('form').trigger('reset')
  store.user = null
}

const signOutFailure = () => $('#user-message').text('SIGN OUT NOT SUCCESSFUL')

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
