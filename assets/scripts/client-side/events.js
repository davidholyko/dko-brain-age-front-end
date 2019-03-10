const store = require('../store')

const initStore = () => {
  console.log('initStore')
  store.game = {}
  store.game.math = {}
  store.game.timer = {}
  store.game.countdown = 30
  store.game.hearts = 5
  store.game.score = 0
  store.game.over = false
  store.game.start = false
  store.game.problem = null
  store.game.answer = null
  store.user = null
}

const resetStore = () => {
  console.log('resetStore')
  store.game = {}
  store.game.math = {}
  store.game.timer = {}
  store.game.countdown = 30
  store.game.hearts = 5
  store.game.score = 0
  store.game.over = false
  store.game.start = false
  store.game.problem = ''
  store.game.answer = ''
}

const resetHearts = () => {
  const hearts =
    `<div id="game-hearts">
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
const stopTimer = () => {
  clearInterval(store.game.timer)
  $('#game-timer').html(`<h1>Game over!</h1>`)
}

const startTimer = () => {
  console.log('setGameTimer')
  const start = Date.now()
  const end = start + (store.game.countdown * 1000)
  let now

  store.game.timer = setInterval(() => {
    now = Date.now()
    if (now > end || store.game.hearts === -1) {
      clearInterval(store.game.timer)
      $('#game-timer').html(`<h1>Game over!</h1>`)
      store.game.over = true
    }
    $('#game-timer').html(`<h1>Time remaining in seconds:${-(now - end) / 1000}</h1>`)
  }, 1)
}

const startGame = () => {
  store.game.start = true
}

module.exports = {
  resetStore,
  resetHearts,
  resetScore,
  resetTimer,
  stopTimer,
  startTimer,
  startGame,
  initStore
}
