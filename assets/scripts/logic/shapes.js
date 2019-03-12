const store = require('../store')

const shapesHTML = {
  triangle: '<img id="triangle" src="public/images/triangle.png" alt="" class="shape">',
  square: '<img id="square" src="public/images/square.png" alt="" class="shape">',
  pentagon: '<img id="pentagon" src="public/images/pentagon.png" alt="" class="shape">',
  hexagon: '<img id="hexagon" src="public/images/hexagon.png" alt="" class="shape">',
  heptagon: '<img id="heptagon" src="public/images/heptagon.png" alt="" class="shape">',
  octagon: '<img id="octagon" src="public/images/octagon.png" alt="" class="shape">',
  question: '<img id="question" src="public/images/question.png" alt="" class="shape">'
}

const generateProblem = () => {
  console.log('generateShapesProblem')
  const shapes = ['triangle', 'square', 'pentagon', 'hexagon', 'heptagon', 'octagon']
  const startIndex = Math.random() * 2 | 0
  const multipleChoiceInput = []
  const multipleChoice = []

  for (let i = 0; i < 5; i++) { multipleChoiceInput.push(shapes[startIndex + i]) }

  const randomIndex = Math.random() * multipleChoiceInput.length | 0
  const answer = multipleChoiceInput[randomIndex]
  multipleChoiceInput[randomIndex] = 'question'
  const question =
  `${shapesHTML[multipleChoiceInput[0]]} ${shapesHTML[multipleChoiceInput[1]]} ${shapesHTML[multipleChoiceInput[2]]}    ${shapesHTML[multipleChoiceInput[3]]} ${shapesHTML[multipleChoiceInput[4]]} <h3>Which shape is missing?</h3>`

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
