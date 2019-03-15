'use strict'

const math = require('./math')
const sentence = require('./sentence')
const words = require('./words')
const shapes = require('./shapes')

const miniGames = {
  0: math,
  1: math,
  2: math,
  3: math,
  4: sentence,
  5: sentence,
  6: words,
  7: words,
  8: shapes,
  9: shapes
}

const generateQuestion = () => {
  // console.log('generateQuestion')
  return miniGames[Math.random() * Object.keys(miniGames).length | 0]()
}

module.exports = { generateQuestion }
