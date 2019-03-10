'use strict'

const config = require('../config')
const store = require('../store')

const signUp = data => {
  console.log('signUp')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = data => {
  console.log('signIn')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = data => {
  console.log('changePassword')
  return $.ajax({
    url: config.apiUrl + '/change-password',
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'PATCH',
    data: data
  })
}

const signOut = () => {
  console.log('signOut')
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'DELETE'
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
