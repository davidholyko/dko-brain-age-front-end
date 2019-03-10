'use strict'

const operators = ['+', '-', '*', '%']
const numbers = Array.from(Array(13).keys())
const operandOne = numbers[Math.random() * numbers.length | 0]
const operandTwo = numbers[Math.random() * numbers.length | 0]
const operator = operators[Math.random() * operators.length | 0]
const operatorMethods = {
  '+': function (x, y) { return x + y },
  '-': function (x, y) { return x - y },
  '*': function (x, y) { return x * y },
  '%': function (x, y) { return x % y }
}

const result = operatorMethods[operator](operandOne, operandTwo)
const elements = [operandOne, operandTwo, result]
const randomIndex = Math.random() * elements.length | 0
const answer = elements[randomIndex]
elements[randomIndex] = '_'
const question = `${elements[0]} ${operator} ${elements[1]} = ${elements[2]}`

// console.log(elements, operator)
console.log(question)
console.log(answer)

// what is the value of answer
