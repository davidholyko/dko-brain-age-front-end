'use strict'

const math = require('./math')
const memory = require('./memory')
const shapes = require('./shapes')
const words = require('./words')

const miniGames = {
  0: math,
  1: memory
}

module.exports = miniGames
