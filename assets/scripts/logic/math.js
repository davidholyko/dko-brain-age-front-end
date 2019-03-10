'use strict'

const store = require('../store')

const generateMathProblem = () => {
  console.log('generateMathProblem')
  const operators = ['+', '-', '*']
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const operandOne = numbers[Math.random() * numbers.length | 0]
  const operandTwo = numbers[Math.random() * numbers.length | 0]
  const operator = operators[Math.random() * operators.length | 0]
  const operatorMethods = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '*': function (x, y) { return x * y }
  }

  const result = operatorMethods[operator](operandOne, operandTwo)
  // result of X operand Y
  const elements = [operandOne, operandTwo, result]
  // store operands and results
  const randomIndex = Math.random() * elements.length | 0
  // random index
  const answer = elements[randomIndex]
  // the value of the operand or result that will represent the answer after one is replaced with _
  elements[randomIndex] = '_'
  // replace an operand or result with blank
  const question = `${elements[0]} ${operator} ${elements[1]} = ${elements[2]}`
  const multipleChoiceOptions = [answer, answer - 1, answer + 2, answer * 2 + 3, answer * 2 + 4]
  const multipleChoice = []

  // randomize output
  for (let i = multipleChoiceOptions.length; i > 0; i--) {
    const random = Math.random() * i | 0
    multipleChoice.push(multipleChoiceOptions[random])
    multipleChoiceOptions.splice(random, 1)
  }

  store.game.math.question = question
  store.game.answer = answer
  store.game.math.multipleChoice = multipleChoice

  $('#game-display').empty()
  $('#game-display').append(`<div><h1>${store.game.math.question}</h1></div>`)
  $('#option-0').text(`${store.game.math.multipleChoice[0]}`)
  $('#option-1').text(`${store.game.math.multipleChoice[1]}`)
  $('#option-2').text(`${store.game.math.multipleChoice[2]}`)
  $('#option-3').text(`${store.game.math.multipleChoice[3]}`)
  $('#option-4').text(`${store.game.math.multipleChoice[4]}`)

  console.log(store.game.answer)
}

// what is the value of answer

module.exports = {
  generateMathProblem
}
