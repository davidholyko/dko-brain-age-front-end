const store = require('../store')

const initStore = () => {
  console.log('initStore')
  store.game = {}
  store.game.math = {}
  store.game.timer = 30
  store.game.hearts = 5
}

module.exports = {
  initStore
}
