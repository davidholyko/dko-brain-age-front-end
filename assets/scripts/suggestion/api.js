'use strict'

const config = require('../config')
const store = require('../store')

const createSuggestion = data => {
  // console.log('createSuggestion')
  return $.ajax({
    url: config.apiUrl + '/suggestions',
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'POST',
    data: {
      'suggestion': {
        'text': data.suggestion.text
      }
    }
  })
}

const updateSuggestion = (data, id) => {
  // console.log('createSuggestion')
  return $.ajax({
    url: config.apiUrl + `/suggestions/${id}`,
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'PATCH',
    data: {
      'suggestion': {
        'text': data.suggestion.text
      }
    }
  })
}

const deleteSuggestion = data => {
  // console.log('deleteSuggestion')
  return $.ajax({
    url: config.apiUrl + `/suggestions/${data}`,
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'DELETE'
  })
}

const showSuggestion = () => {
  // console.log('showSuggestion')
  return $.ajax({
    url: config.apiUrl + `/suggestions/`,
    method: 'GET'
  })
}

const showMySuggestion = () => {
  // console.log('showMySuggestion')
  return $.ajax({
    url: config.apiUrl + `/users/${store.user.handle}`,
    method: 'GET'
  })
}

module.exports = {
  createSuggestion,
  updateSuggestion,
  deleteSuggestion,
  showSuggestion,
  showMySuggestion
}
