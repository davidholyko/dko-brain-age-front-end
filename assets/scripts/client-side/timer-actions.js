const store = require('../store')

const resetTimer = () => {
  $('#game-timer').html('')
}
const stopTimer = () => {
  if (store.game.timer) { clearInterval(store.game.timer) }
  $('#game-timer').html(`<h3>Game over!</h3>`)
}

const startTimer = () => {
  // console.log('setGameTimer')
  clearInterval(store.game.timer)
  const start = Date.now()
  const end = start + (store.game.countdown * 1000)
  let now

  store.game.timer = setInterval(() => {
    now = Date.now()
    if (now > end || !store.game.hearts) {
      clearInterval(store.game.timer)
      $('#game-timer').html(`<h3>Game over!</h3>`)
      $('#game-display').append('<h3>Want to play again? Click here</h3>')
      // endGame()
    }
    $('#game-timer').html(`<h3>Time remaining in seconds: ${((end - now) / 1000).toString().slice(0, -2)}</h3>`)
    if ($('#game-timer').text() === 'Time remaining in seconds: -0.0') { $('#game-timer').html(`<h3>Game over!</h3>`) }
  }, 1)
}

module.exports = {
  startTimer,
  resetTimer,
  stopTimer
}
