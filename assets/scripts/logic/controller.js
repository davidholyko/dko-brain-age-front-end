'use strict'

const math = require('./math')
const sentence = require('./sentence')
const words = require('./words')
const shapes = require('./shapes')

const miniGames = {
  0: math,
  1: sentence,
  2: words,
  3: shapes
}

module.exports = miniGames
