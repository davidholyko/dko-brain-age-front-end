'use strict'
console.log('game/events.js is running...')

const addMath = () => {
  $('#game-board').append('<div>Num </div>')
  $('#game-board').append('<div>+ </div>')
  $('#game-board').append('<div>Num </div>')
  $('#game-board').append('<div>= </div>')
  $('#game-board').append('<div>Answer </div>')
}

const addHandlers = () => {
  addMath()
}

module.exports = {
  addHandlers
}
