const store = require('../store')

const shapesHTML = {
  triangle: '<img src="public/images/triangle.png" alt="" id="triangle">',
  square: '<img src="public/images/square.png" alt="" id="square">',
  pentagon: '<img src="public/images/pentagon.png" alt="" id="pentagon">',
  hexagon: '<img src="public/images/hexagon.png" alt="" id="hexagon">',
  heptagon: '<img src="public/images/heptagon.png" alt="" id="heptagon">',
  octagon: '<img src="public/images/octagon.png" alt="" id="octagon">',
  question: '<img src="public/images/question.png" alt="" id="question">'
}

const generateProblem = () => {
  const shapes = ['triangle', 'square', 'pentagon', 'hexagon', 'heptagon', 'octagon']
  const startIndex = Math.random() * 2 | 0
  const multipleChoiceInput = []
  const multipleChoice = []

  for (let i = 0; i < 5; i++) { multipleChoiceInput.push(shapes[startIndex + i]) }

  const randomIndex = Math.random() * multipleChoiceInput.length | 0
  const answer = multipleChoiceInput[randomIndex]
  multipleChoiceInput[randomIndex] = 'question'
  const question =
  `${shapesHTML[multipleChoiceInput[0]]} ${shapesHTML[multipleChoiceInput[1]]} ${shapesHTML[multipleChoiceInput[2]]}    ${shapesHTML[multipleChoiceInput[3]]} ${shapesHTML[multipleChoiceInput[4]]} <h1>Which shape is missing?</h1>`

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
