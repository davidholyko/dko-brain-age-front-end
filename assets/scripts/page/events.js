'use strict'

const store = require('../store')

const onToggleGamePage = () => {
  // console.log('onToggleGamePage')
  store.currentPage = 'game'
  $('#stats-page').hide()
  $('#suggestions-page').hide()
  $('#game-page').show()
  $('#toggle-page-title').text('Game Page')
  if (store.user) {
    $('#show-all-suggestion-button-container').hide()
    $('#show-my-suggestion-button-container').hide()
  }
}

const onToggleSuggestionsPage = () => {
  // console.log('onToggleSuggestionsPage')
  store.currentPage = 'suggestion'
  $('#stats-page').hide()
  $('#game-page').hide()
  $('#suggestions-page').show()
  $('#suggestions-page').css('display', 'flex')
  $('#toggle-page-title').text('Suggestions Page')
  if (store.user) {
    $('#show-all-suggestion-button-container').show()
    $('#show-my-suggestion-button-container').show()
  }
}

const onToggleStatsPage = () => {
  // console.log('onToggleSuggestionsPage')
  store.currentPage = 'stats'
  $('#suggestions-page').hide()
  $('#game-page').hide()
  $('#stats-page').show()
  $('#toggle-page-title').text('Stats Page')
  if (store.user) {
    $('#show-all-suggestion-button-container').hide()
    $('#show-my-suggestion-button-container').hide()
  }
}

const addHandlers = () => {
  // console.log('addHandlers Page')
  $('#toggle-game-page-button').on('click', onToggleGamePage)
  $('#toggle-suggestions-page-button').on('click', onToggleSuggestionsPage)
  $('#toggle-stats-page-button').on('click', onToggleStatsPage)
}

module.exports = {
  addHandlers
}
