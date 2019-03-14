const store = require('../store')
const view = require('../view/view')

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
  store.game.countdown = 60
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
  $('#game-timer').html(`<h3>Game over!</h3>`)
}

const updateGameDisplay = () => {
  console.log('updateGameDisplay')
  $('#game-display').empty()
  $('#game-display').append(`<div><h3>${store.game.question}</h3></div>`)
  $('#option-0').text(`${store.game.multipleChoice[0]}`)
  $('#option-1').text(`${store.game.multipleChoice[1]}`)
  $('#option-2').text(`${store.game.multipleChoice[2]}`)
  $('#option-3').text(`${store.game.multipleChoice[3]}`)
  $('#option-4').text(`${store.game.multipleChoice[4]}`)

  if (store.game.over) {
    $('#game-display').append('<h3>Want to play again? Click here again</h3>')
    view.shadeGameDisplay()
  }
}

module.exports = {
  resetStore,
  resetHearts,
  resetScore,
  resetTimer,
  stopTimer,
  startGame,
  initStore,
  updateGameDisplay,
  allowSubmission,
  forbidSubmission
}
