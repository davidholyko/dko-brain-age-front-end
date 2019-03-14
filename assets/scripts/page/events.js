'use strict'

const store = require('../store')

const onToggleSuggestionsPage = () => {
  // console.log('onToggleSuggestionsPage')

  if (store.currentPage === 'game') {
    store.currentPage = 'suggestion'
    $('#stats-page').hide()
    $('#game-page').hide()
    $('#suggestions-page').show()
    $('#suggestions-page').css('display', 'flex')
    $('#toggle-page-button').text('Suggestion Page')
    if (store.user) {
      $('#show-all-suggestion-button-container').show()
      $('#show-my-suggestion-button-container').show()
    }
  } else if (store.currentPage === 'suggestion') {
    store.currentPage = 'stats'
    $('#suggestions-page').hide()
    $('#game-page').hide()
    $('#stats-page').show()
    $('#toggle-page-button').text('Stats Page')
    if (store.user) {
      $('#show-all-suggestion-button-container').hide()
      $('#show-my-suggestion-button-container').hide()
    }
  } else if (store.currentPage === 'stats') {
    store.currentPage = 'game'
    $('#stats-page').hide()
    $('#suggestions-page').hide()
    $('#game-page').show()
    $('#toggle-page-button').text('Game Page')
    if (store.user) {
      $('#show-all-suggestion-button-container').hide()
      $('#show-my-suggestion-button-container').hide()
    }
  }
}

const addHandlers = () => {
  // console.log('addHandlers Page')
  $('#toggle-page-button').on('click', onToggleSuggestionsPage)
}

module.exports = {
  addHandlers
}
