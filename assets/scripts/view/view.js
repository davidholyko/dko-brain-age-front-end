const store = require('../store')

const showPreLogin = () => { $('.pre-login').show() }
const hidePreLogin = () => { $('.pre-login').hide() }

const showPostLogin = () => { $('.post-login').show() }
const hidePostLogin = () => { $('.post-login').hide() }

const showGameDisplay = () => { $('.post-game-start').show() }
const hideGameDisplay = () => { $('.post-game-start').hide() }

const showSuggestion = () => { $('.suggestion').show() }
const hideSuggestion = () => { $('.suggestion').hide() }

const showGame = () => { $('.game').show() }
const hideGame = () => { $('.game').hide() }

const showSuggestionPage = () => { $('#suggestion-page').show() }
const hideSuggestionPage = () => { $('#suggestion-page').hide() }

const showGamePage = () => { $('#game-page').show() }
const hideGamePage = () => { $('#game-page').hide() }

const showStatsPage = () => { $('#stats-page').show() }
const hideStatsPage = () => { $('#stats-page').hide() }

const shadeGameDisplay = () => {
  $('#game-display').css('background-color', 'rgba(0,0,0,0.5)')
  $('#game-display').css('color', 'white')
  $('#game-display').css('cursor', 'pointer')
}
const unshadeGameDisplay = () => {
  $('#game-display').css('background-color', 'rgba(0,0,0,0.0)')
  $('#game-display').css('color', 'black')
  $('#game-display').css('cursor', 'auto')
}

const square = () => {
  $('.shape').height($('.shape').width())
}

const scaleMathQuestionFont = () => {
  console.log('scaleMathQuestionFont')
  // $('#question-math-item').css('font-size', `${$('question-math').width / 4}`)

  $('#question-math-item').css('font-size', '200px')
  $('#question-math-item').css('color', 'green')
}

const login = () => {
  console.log('login')
  hidePreLogin()
  showPostLogin()
  if (store.currentPage !== 'suggestion') {
    $('#show-all-suggestion-button-container').hide()
    $('#show-my-suggestion-button-container').hide()
  }
  $('#suggestions-container').width('50%')
}

const logout = () => {
  showPreLogin()
  hidePostLogin()
  $('#undo-delete-button').hide()
  $('#suggestions-container').width('100%')
}

const startGame = () => {
  showGameDisplay()
}

const endGame = () => {
  hideGameDisplay()
}

const onPageLoad = () => {
  showPreLogin()
  showGame()
  hideSuggestion()
  hidePostLogin()
  endGame()
  shadeGameDisplay()
  hideSuggestionPage()
  hideStatsPage()
  square()
  scaleMathQuestionFont()

  setTimeout(() => $(window).resize(scaleMathQuestionFont), 1)
  setTimeout(() => $(window).resize(square), 1)

  $('#suggestions-container').width('100%')
}

module.exports = {
  onPageLoad,
  login,
  logout,
  startGame,
  endGame,
  showSuggestion,
  hideSuggestion,
  showGame,
  hideGame,
  hideSuggestionPage,
  showSuggestionPage,
  shadeGameDisplay,
  unshadeGameDisplay,
  showGamePage,
  hideGamePage,
  hideStatsPage,
  showStatsPage
}
