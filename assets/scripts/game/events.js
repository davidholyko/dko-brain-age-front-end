'use strict'
console.log('game/events.js is running...')

const logicMath = require('../logic/math')
const store = require('../store')

const addMathProblem = () => {
  console.log('addMathProblem')
  event.preventDefault()

  logicMath.generateMathProblem()
  $('#game-board').append(`<div>${store.game.math.question} </div>`)
  $('#option-0 span').text(`${store.game.math.multipleChoice[0]}`)
  $('#option-1 span').text(`${store.game.math.multipleChoice[1]}`)
  $('#option-2 span').text(`${store.game.math.multipleChoice[2]}`)
  $('#option-3 span').text(`${store.game.math.multipleChoice[3]}`)
  $('#option-4 span').text(`${store.game.math.multipleChoice[4]}`)
}

const addHandlers = () => {
  $('.option').on('click', addMathProblem)
}

module.exports = {
  addHandlers
}
