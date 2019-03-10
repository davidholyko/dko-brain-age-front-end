'use strict'

const math = require('./math')
const memory = require('./memory')
const words = require('./words')
// const shapes = require('./shapes')

const miniGames = {
  0: math,
  1: memory,
  2: words
}

module.exports = miniGames
