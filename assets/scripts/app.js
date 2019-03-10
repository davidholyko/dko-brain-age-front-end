'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
const clientEvents = require('./client-side/events')
const logicMath = require('./logic/math')

$(() => {
  console.log('JavaScript is running...')
  clientEvents.initStore()
  authEvents.addHandlers()
  gameEvents.addHandlers()
  gameEvents.setGameTimer()
})
