const store = require('../store')

const initStore = () => {
  console.log('initStore')
  store.game = {}
  store.game.problem = {}
  store.game.question = ''
  store.game.answer = ''
  store.game.multipleChoice = []
  store.game.timer = {}
  store.game.countdown = 60
  store.game.hearts = 5
  store.game.score = 0
  store.game.submit = false
  store.game.over = false
  store.game.start = false
  store.user = {}
}

const resetStore = () => {
  console.log('resetStore')
  store.game.question = ''
  store.game.answer = ''
  store.game.multipleChoice = []
  store.game.timer = {}
  store.game.hearts = 5
  store.game.score = 0
  store.game.submit = false
  store.game.over = false
  store.game.start = false
}

const startGame = () => { store.game.start = true }

const allowSubmission = () => { store.game.submit = true }
const forbidSubmission = () => { store.game.submit = false }

const resetHearts = () => {
  const hearts =
    `<div id="game-hearts">
      <img id="heart-0" class="heart" src="public/images/full-heart.png" alt="">
      <img id="heart-1" class="heart" src="public/images/full-heart.png" alt="">
      <img id="heart-2" class="heart" src="public/images/full-heart.png" alt="">
      <img id="heart-3" class="heart" src="public/images/full-heart.png" alt="">
      <img id="heart-4" class="heart" src="public/images/full-heart.png" alt="">
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
  clearInterval(store.game.timer)
  const start = Date.now()
  const end = start + (store.game.countdown * 1000)
  let now

  store.game.timer = setInterval(() => {
    now = Date.now()
    if (now > end || !store.game.hearts) {
      clearInterval(store.game.timer)
      $('#game-timer').html(`<h1>Game over!</h1>`)
      store.game.over = true
    }
    $('#game-timer').html(`<h1>Time remaining in seconds: ${((end - now) / 1000).toString().slice(0, -1)}</h1>`)
    if ($('#game-timer').text() === 'Time remaining in seconds: -0.00') { $('#game-timer').html(`<h1>Game over!</h1>`) }
  }, 1)
}

const updateGameDisplay = () => {
  console.log('updateGameDisplay')
  $('#game-display').empty()
  $('#game-display').append(`<div><h1>${store.game.question}</h1></div>`)
  $('#option-0').text(`${store.game.multipleChoice[0]}`)
  $('#option-1').text(`${store.game.multipleChoice[1]}`)
  $('#option-2').text(`${store.game.multipleChoice[2]}`)
  $('#option-3').text(`${store.game.multipleChoice[3]}`)
  $('#option-4').text(`${store.game.multipleChoice[4]}`)
}

module.exports = {
  resetStore,
  resetHearts,
  resetScore,
  resetTimer,
  stopTimer,
  startTimer,
  startGame,
  initStore,
  updateGameDisplay,
  allowSubmission,
  forbidSubmission
}
