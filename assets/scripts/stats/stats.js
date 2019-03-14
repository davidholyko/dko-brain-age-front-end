// find mean median mode
// mathjs library

const store = require('../store')
const math = require('mathjs')

const calcAll = () => {
  console.log('calcAll')
  store.data = store.data.games.map(game => game.score)
  $('#stats').empty()
  calcMode()
  calcAverage()
  calcMedian()
}

const calcAverage = () => {
  console.log('calcAverage')
  store.stats.mean = math.mean(store.data)
  $('#stats').append(`<h1>Global Average Score: ${Math.trunc(store.stats.mean)}`)
}

const calcMedian = () => {
  console.log('calcMedian')
  store.stats.median = math.median(store.data)
  $('#stats').append(`<h1>Global Median Score: ${store.stats.median}`)
}

const calcMode = () => {
  console.log('calcMode')
  store.stats.mode = math.mode(store.data)
  $('#stats').append(`<h1>Global Mode Score: ${store.stats.mode}`)
}

module.exports = {
  calcAll
}
