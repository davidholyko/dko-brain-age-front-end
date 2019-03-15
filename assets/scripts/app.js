'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const pageEvents = require('./page/events')
const gameEvents = require('./game/events')
const playEvents = require('./game/play')
const suggestionEvents = require('./suggestion/events')
const client = require('./client-side/store-actions')
const view = require('./view/view')

// const logicMath = require('./logic/math')

$(() => {
  // console.log('JavaScript is running...')
  client.initStore()
  authEvents.addHandlers()
  gameEvents.addHandlers()
  pageEvents.addHandlers()
  suggestionEvents.addHandlers()
  playEvents.addHandlers()
  view.onPageLoad()
  gameEvents.onGetScores()
})
