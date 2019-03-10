'use strict'

const words = ['dog', 'cat', 'horse', 'rabbit', 'cow', 'person', 'goat', 'wizard',
  'jumped', 'ran', 'looked', 'ate', 'backed', 'talked', 'bit', 'approached',
  'sleepy', 'hungry', 'angry', 'excited', 'curious', 'tall', 'happy', 'bewildered', 'green',
  'hastily', 'quickly', 'carefully', 'slowly', 'menacingly', 'abruptly', 'carelessly', 'calmly']

const question = []
const output = []

// add words into array
for (let i = 0; i < 4; i++) {
  const randomIndex = Math.random() * words.length | 0
  const input = { 0: words[randomIndex], 1: words[randomIndex], 2: words[randomIndex], 3: words[randomIndex] }
  const randomInput = input[i]

  switch (i) {
    case 0:
      question.push(randomInput)
      break
    case 1:
      question.push(randomInput)
      question.push(randomInput)
      break
    case 2:
      question.push(randomInput)
      question.push(randomInput)
      question.push(randomInput)
      break
    case 3:
      question.push(randomInput)
      question.push(randomInput)
      question.push(randomInput)
      question.push(randomInput)
      break
  }
  words.splice(randomIndex, 1)
}

// randomize output
for (let i = question.length; i > 0; i--) {
  const random = Math.random() * i | 0
  output.push(question[random])
  question.splice(random, 1)
}

// which word appeared x amount of times

console.log(output)
