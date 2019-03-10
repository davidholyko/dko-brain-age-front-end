const store = require('../store')

const initStore = () => {
  console.log('initStore')
  store.game = {}
  store.game.math = {}
  store.game.timer = 30
}

module.exports = {
  initStore
}
