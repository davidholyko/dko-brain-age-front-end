const store = require('../store')

const initStore = () => {
  console.log('initStore')
  store.game = {}
  store.game.math = {}
  store.game.timer = 30
  store.game.hearts = 4
  store.game.score = 0
  store.game.answer = ''
  store.game.over = false
}

module.exports = {
  initStore
}
