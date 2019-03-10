'use strict'

// QUESTION: 10 WORDS ARE IN THE ARRAY
// WHICH WORD APPEARS 0,1,2,3,4 TIMES?

const store = require('../store')

const generateProblem = () => {
  console.log('generateMemoryProblem')

  const words = ['dog', 'cat', 'horse', 'rabbit', 'cow', 'person', 'goat', 'wizard',
    'jumped', 'ran', 'looked', 'ate', 'backed', 'talked', 'bit', 'approached',
    'sleepy', 'hungry', 'angry', 'excited', 'curious', 'tall', 'happy', 'bewildered', 'green',
    'hastily', 'quickly', 'carefully', 'slowly', 'menacingly', 'abruptly', 'carelessly', 'calmly']

  const choicesInput = []
  const choicesOutput = []
  const multipleChoice = []

  // add words into array
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.random() * words.length | 0
    const randomChoice = words[randomIndex]
    multipleChoice.push(randomChoice)

    switch (i) {
      case 0:
        choicesInput.push(randomChoice)
        break
      case 1:
        choicesInput.push(randomChoice)
        choicesInput.push(randomChoice)
        break
      case 2:
        choicesInput.push(randomChoice)
        choicesInput.push(randomChoice)
        choicesInput.push(randomChoice)
        break
      case 3:
        choicesInput.push(randomChoice)
        choicesInput.push(randomChoice)
        choicesInput.push(randomChoice)
        choicesInput.push(randomChoice)
        break
    }
    words.splice(randomIndex, 1)
  }

  // randomize choicesOutput
  for (let i = choicesInput.length; i > 0; i--) {
    const random = Math.random() * i | 0
    choicesOutput.push(choicesInput[random])
    choicesInput.splice(random, 1)
  }

  // add a 5th choice to multipleChoice
  // get difference between words array and multipleChoice
  // select a random word that isnt already in the multipleChoice
  // push word into multipleChoice
  multipleChoice.unshift(words.filter(word => !multipleChoice.includes(word))[Math.random() * words.length | 0])

  const randomChoiceIndex = Math.random() * 5 | 0

  const question = `${choicesOutput} Which word appeared ${randomChoiceIndex} times?`
  const answer = `${multipleChoice[randomChoiceIndex]}`

  store.game.question = question
  store.game.answer = answer
  store.game.multipleChoice = multipleChoice

  // console.log(answer)
}

module.exports = generateProblem
