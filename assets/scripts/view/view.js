
const showPreLogin = () => { $('.pre-login').show() }
const hidePreLogin = () => { $('.pre-login').hide() }

const showPostLogin = () => { $('.post-login').show() }
const hidePostLogin = () => { $('.post-login').hide() }

const showHearts = () => { $('#game-hearts').show() }
const hideHearts = () => { $('#game-hearts').hide() }

const showGameDisplay = () => { $('.post-game-start').show() }
const hideGameDisplay = () => { $('.post-game-start').hide() }

const showSuggestion = () => { $('.suggestion').show() }
const hideSuggestion = () => { $('.suggestion').hide() }

const showSuggestionPage = () => { $('#suggestion-page').show() }
const hideSuggestionPage = () => { $('#suggestion-page').hide() }

const showGame = () => { $('.game').show() }
const hideGame = () => { $('.game').hide() }

const login = () => {
  hidePreLogin()
  showPostLogin()
}

const logout = () => {
  showPreLogin()
  hidePostLogin()
}

const startGame = () => {
  showHearts()
  showGameDisplay()
}

const endGame = () => {
  hideHearts()
  hideGameDisplay()
}

const onPageLoad = () => {
  showPreLogin()
  showGame()
  hideSuggestion()
  hidePostLogin()
  hideSuggestionPage()
  endGame()
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
  showSuggestionPage
}
