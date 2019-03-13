// find mean median mode
// mathjs library

const store = require('../store')
const math = require('mathjs')

const calcAll = () => {
  console.log('calcAll')
  store.data = store.data.games.map(game => game.score)
  calcAverage()
  calcMedian()
  calcMode()
}

const calcAverage = () => {
  console.log('calcAverage')
  store.stats.mean = math.mean(store.data)
}

const calcMedian = () => {
  console.log('calcMedian')
  store.stats.median = math.median(store.data)
}

const calcMode = () => {
  console.log('calcMode')
  store.stats.mode = math.mode(store.data)
}

module.exports = {
  calcAll
}
