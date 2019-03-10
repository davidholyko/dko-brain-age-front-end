const store = require('../store')
const moment = require('moment')

const initStore = () => {
  console.log('initStore')
  store.game = {}
  store.game.math = {}
  store.game.timer = 30
  store.game.hearts = 4
  store.game.score = 0
  store.game.answer = ''
  store.game.over = false
  store.game.start = false
  store.game.problem = ''
}

const resetHearts = () => {
  const hearts = `
    <div id="game-hearts">
    <img id="heart-0" class="heart" src="/public/images/full-heart.png" alt="">
    <img id="heart-1" class="heart" src="/public/images/full-heart.png" alt="">
    <img id="heart-2" class="heart" src="/public/images/full-heart.png" alt="">
    <img id="heart-3" class="heart" src="/public/images/full-heart.png" alt="">
    <img id="heart-4" class="heart" src="/public/images/full-heart.png" alt="">
  </div>`

  $('#game-hearts').replaceWith(hearts)
}

const resetScore = () => {
  $('#game-score').html('')
}

const resetTimer = () => {
  $('#game-timer').html('')
}

const startGameTimer = () => {
  console.log('setGameTimer')
  const start = Date.now()
  const end = start + 30000
  let now

  const timer = setInterval(() => {
    now = Date.now()
    if (now > end) {
      clearInterval(timer)
      store.game.over = true
    }
    $('#game-timer').html(`<h1>${now}</h1>`)
  }, 1)
}

module.exports = {
  initStore,
  resetHearts,
  resetScore,
  resetTimer,
  startGameTimer
}
