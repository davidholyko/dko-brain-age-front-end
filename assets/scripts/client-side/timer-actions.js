const store = require('../store')
const view = require('../view/view')
const gameEvents = require('../game/events')

const resetTimer = () => {
  $('#game-timer').html('')
}
const stopTimer = () => {
  clearInterval(store.game.timer)
  $('#game-timer').html(`<h3>Time is up. Game over!</h3>`)
}

const startTimer = () => {
  console.log('setGameTimer')
  clearInterval(store.game.timer)
  const start = Date.now()
  const end = start + (store.game.countdown * 1000)
  let now

  store.game.timer = setInterval(() => {
    now = Date.now()
    if (now > end) {
      clearInterval(store.game.timer)
      $('#game-display')
        .html('<h1 id="game-display-text" class="d-flex align-items-center justify-content-center w-100">Want to play again? Click here!</h1>')
      stopPlaying()
      stopTimer()
    } else if (now + 10000 > end) {
      $('#game-timer')
        .html(`<h3 id="game-timer-text" class="font-weight-bold">Time remaining in seconds: ${((end - now) / 1000).toString().slice(0, -2)}</h3>`)
      $('#game-timer-text').toggleClass('text-danger')
    } else {
      $('#game-timer')
        .html(`<h3 id="game-timer-text" class="font-weight-bold">Time remaining in seconds: ${((end - now) / 1000).toString().slice(0, -2)}</h3>`)
    }
  }, 1)
}

const stopPlaying = () => {
  console.log('stopPlaying')
  $('.option').hide()
  stopTimer()
  view.shadeGameDisplay()
  store.game.over = true
  if (store.user) {
    gameEvents.onSubmitScore()
    gameEvents.onGetScores()
  }
}

module.exports = {
  startTimer,
  resetTimer,
  stopTimer
}
