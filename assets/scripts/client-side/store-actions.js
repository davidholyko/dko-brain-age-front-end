const store = require('../store')

const initStore = () => {
  console.log('initStore')
  store.data = {}
  store.stats = {}
  store.game = {}
  store.currentPage = 'game'
  store.suggestions = []
  store.game.question = ''
  store.game.answer = ''
  store.game.multipleChoice = []
  store.game.timer = false
  store.game.countdown = 10
  store.game.hearts = 5
  store.game.score = 0
  store.game.submit = false
  store.game.over = false
  store.game.start = false
  store.user = false
}

const resetStore = () => {
  console.log('resetStore')
  store.game.question = ''
  store.game.answer = ''
  store.game.multipleChoice = []
  store.game.timer = false
  store.game.hearts = 5
  store.game.score = 0
  store.game.submit = false
  store.game.over = false
  store.game.start = false
}

const startGame = () => { store.game.start = true }
const endGame = () => { store.game.start = false }
const allowSubmission = () => { store.game.submit = true }
const forbidSubmission = () => { store.game.submit = false }

module.exports = {
  resetStore,
  startGame,
  endGame,
  initStore,
  allowSubmission,
  forbidSubmission
}
