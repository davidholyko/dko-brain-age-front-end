
const showPreLogin = () => { $('.pre-login').show() }
const hidePreLogin = () => { $('.pre-login').hide() }

const showPostLogin = () => { $('.post-login').show() }
const hidePostLogin = () => { $('.post-login').hide() }

const showGameDisplay = () => { $('.post-game-start').show() }
const hideGameDisplay = () => { $('.post-game-start').hide() }

const showSuggestion = () => { $('.suggestion').show() }
const hideSuggestion = () => { $('.suggestion').hide() }

const showSuggestionPage = () => { $('#suggestion-page').show() }
const hideSuggestionPage = () => { $('#suggestion-page').hide() }

const showGame = () => { $('.game').show() }
const hideGame = () => { $('.game').hide() }

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

const login = () => {
  hidePreLogin()
  showPostLogin()
}

const logout = () => {
  showPreLogin()
  hidePostLogin()
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
  hideSuggestionPage()
  endGame()
  shadeGameDisplay()
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
  unshadeGameDisplay
}
