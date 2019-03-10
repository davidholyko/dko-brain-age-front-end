'use strict'

const operators = ['+', '-', '*', '%']
const numbers = Array.from(Array(13).keys())
const randomNumberOne = numbers[Math.random() * numbers.length | 0]
const randomNumberTwo = numbers[Math.random() * numbers.length | 0]
const randomOperator = operators[Math.random() * operators.length | 0]
const operator = {
  '+': function (x, y) { return x + y },
  '-': function (x, y) { return x - y },
  '*': function (x, y) { return x * y },
  '%': function (x, y) { return x % y }
}

const answer = operator[randomOperator](randomNumberOne, randomNumberTwo)
const question = `${randomNumberOne} ${randomOperator} ${randomNumberTwo} = ${answer}`

console.log(question)

// what is the value of answer
