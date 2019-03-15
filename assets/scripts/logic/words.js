'use strict'

// QUESTION: 10 WORDS ARE IN THE ARRAY
// WHICH WORD APPEARS 0,1,2,3,4 TIMES?

const store = require('../store')

const generateProblem = () => {
  console.log('generateWordsProblem')

  const words = ['dog', 'cat', 'horse', 'rabbit', 'cow', 'person', 'goat', 'wizard',
    'jumped', 'ran', 'looked', 'ate', 'backed', 'talked', 'bit', 'approached',
    'sleepy', 'hungry', 'angry', 'excited', 'curious', 'tall', 'happy', 'bewildered', 'green',
    'hastily', 'quickly', 'carefully', 'slowly', 'menacingly', 'abruptly', 'carelessly', 'calmly',
    'run', 'jumps', 'quick', 'often', 'many', 'one', 'two', 'three', 'four', 'house', 'chair', 'bed']

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
  let s = 's'
  if (randomChoiceIndex === 1) { s = '' }

  const question =
  `<div id="question-words" class="d-flex flex-wrap">
    <div class="bg-dark text-light px-3 m-3 rounded d-flex"><h3 class="d-flex m-0 align-items-center">${choicesOutput[0]}</h3></div>
    <div class="bg-dark text-light px-3 m-3 rounded d-flex"><h3 class="d-flex m-0 align-items-center">${choicesOutput[1]}</h3></div>
    <div class="bg-dark text-light px-3 m-3 rounded d-flex"><h3 class="d-flex m-0 align-items-center">${choicesOutput[2]}</h3></div>
    <div class="bg-dark text-light px-3 m-3 rounded d-flex"><h3 class="d-flex m-0 align-items-center">${choicesOutput[3]}</h3></div>
    <div class="bg-dark text-light px-3 m-3 rounded d-flex"><h3 class="d-flex m-0 align-items-center">${choicesOutput[4]}</h3></div>
    <div class="bg-dark text-light px-3 m-3 rounded d-flex"><h3 class="d-flex m-0 align-items-center">${choicesOutput[5]}</h3></div>
    <div class="bg-dark text-light px-3 m-3 rounded d-flex"><h3 class="d-flex m-0 align-items-center">${choicesOutput[6]}</h3></div>
    <div class="bg-dark text-light px-3 m-3 rounded d-flex"><h3 class="d-flex m-0 align-items-center">${choicesOutput[7]}</h3></div>
    <div class="bg-dark text-light px-3 m-3 rounded d-flex"><h3 class="d-flex m-0 align-items-center">${choicesOutput[8]}</h3></div>
    <div class="bg-dark text-light px-3 m-3 rounded d-flex"><h3 class="d-flex m-0 align-items-center">${choicesOutput[9]}</h3></div>
  </div>
  <h3 class="text-center w-100"> Which word above appears ${randomChoiceIndex} time${s}?</h3>`
  const answer = `${multipleChoice[randomChoiceIndex]}`

  const multipleChoiceShuffled = []
  // randomize multipleChoice
  for (let i = multipleChoice.length; i > 0; i--) {
    const random = Math.random() * i | 0
    multipleChoiceShuffled.push(multipleChoice[random])
    multipleChoice.splice(random, 1)
  }

  store.game.question = question
  store.game.answer = answer
  store.game.multipleChoice = multipleChoiceShuffled
}

module.exports = generateProblem
