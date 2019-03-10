const store = require('../store')

const generateProblem = () => {
  const shapes = ['triangle', 'square', 'pentagon', 'hexagon', 'heptagon', 'octagon']
  const startIndex = Math.random() * 2 | 0
  const multipleChoiceInput = []
  const multipleChoice = []

  for (let i = 0; i < 5; i++) { multipleChoiceInput.push(shapes[startIndex + i]) }

  const randomIndex = Math.random() * multipleChoiceInput.length | 0
  const answer = multipleChoiceInput[randomIndex]
  multipleChoiceInput[randomIndex] = 'question'
  const question = `${multipleChoiceInput} Which shape is missing?`

  // randomize MultipleChoice
  for (let i = multipleChoiceInput.length; i > 0; i--) {
    const random = Math.random() * i | 0
    multipleChoice.push(multipleChoiceInput[random])
    multipleChoiceInput.splice(random, 1)
  }

  const questionIndex = multipleChoice.findIndex(item => item === 'question')
  multipleChoice[questionIndex] = answer

  store.game.question = question
  store.game.answer = answer
  store.game.multipleChoice = multipleChoice
}

module.exports = generateProblem
