'use strict'

//  QUESTION: X OPERAND Y EQUALS Z
//  IF X,Y, OR Z IS TAKEN OUT, WHAT IS THE VALUE OF THE ITEM THAT IS REMOVED?

const store = require('../store')

const generateProblem = () => {
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
  elements[randomIndex] = '___'
  // replace an operand or result with blank
  const question =
  `<div id="question-math" class="d-flex justify-content-around w-100">
    <div class="col-2 p-0 d-flex justify-content-center"><span class="d-flex font-weight-bold question-math-item align-items-center">${elements[0]}</span></div>
    <div class="col-2 p-0 d-flex justify-content-center"><span class="d-flex font-weight-bold question-math-item align-items-center">${operator}</span></div>
    <div class="col-2 p-0 d-flex justify-content-center"><span class="d-flex font-weight-bold question-math-item align-items-center">${elements[1]}</span></div>
    <div class="col-2 p-0 d-flex justify-content-center"><span class="d-flex font-weight-bold question-math-item align-items-center">=</span></div>
    <div class="col-2 p-0 d-flex justify-content-center"><span class="d-flex font-weight-bold question-math-item align-items-center">${elements[2]}</span></div>
  </div>`
  const multipleChoiceOptions = [answer, answer - 1, answer + 2, answer * 3 - 3, answer * 4 + 4]
  const multipleChoice = []

  // randomize output
  for (let i = multipleChoiceOptions.length; i > 0; i--) {
    const random = Math.random() * i | 0
    multipleChoice.push(multipleChoiceOptions[random])
    multipleChoiceOptions.splice(random, 1)
  }

  store.game.question = question
  store.game.answer = answer
  store.game.multipleChoice = multipleChoice
}

module.exports = generateProblem
