
const showPreLogin = () => { $('.pre-login').show() }
const hidePreLogin = () => { $('.pre-login').hide() }

const showPostLogin = () => { $('.post-login').show() }
const hidePostLogin = () => { $('.post-login').hide() }

const showHearts = () => { $('#game-hearts').show() }
const hideHearts = () => { $('#game-hearts').hide() }

const showGame = () => { $('.post-game-start').show() }
const hideGame = () => { $('.post-game-start').hide() }

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
  showGame()
}

const endGame = () => {
  hideHearts()
  hideGame()
}

const onPageLoad = () => {
  showPreLogin()
  hidePostLogin()
  endGame()
}

module.exports = {
  onPageLoad,
  login,
  logout,
  startGame,
  endGame
}
