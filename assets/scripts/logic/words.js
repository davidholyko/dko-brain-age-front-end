'use strict'

const store = require('../store')

const generateProblem = () => {
  console.log('generateWordProblem')
  const nouns = ['dog', 'cat', 'horse', 'rabbit', 'cow', 'person', 'goat', 'wizard']
  const verbs = ['jumped over', 'ran towards', 'looked at', 'picked up', 'moved', 'talked to', 'ate', 'approached']
  const adjectives = ['sleepy', 'hungry', 'angry', 'excited', 'curious', 'tall', 'happy', 'bewildered', 'green']
  const adverbs = ['hastily', 'quickly', 'carefully', 'slowly', 'menacingly', 'abruptly', 'carelessly', 'calmly']

  const subject = nouns[Math.random() * nouns.length | 0]
  const object = nouns[Math.random() * nouns.length | 0]
  const verb = verbs[Math.random() * verbs.length | 0]
  const adverb = adverbs[Math.random() * adverbs.length | 0]
  const subjectAdjective = adjectives[Math.random() * adjectives.length | 0]
  const objectAdjective = adjectives[Math.random() * adjectives.length | 0]

  const sentence =
  [ {word: subjectAdjective, declension: 'adjectives'},
    {word: subject, declension: 'nouns'},
    {word: adverb, declension: 'adverbs'},
    {word: verb, declension: 'verbs'},
    {word: objectAdjective, declension: 'adjectives'},
    {word: object, declension: 'nouns'}]
  const randomIndex = Math.random() * sentence.length | 0
  const answer = sentence[randomIndex]
  sentence[randomIndex] = {word: '_____', declension: answer.declension}
  const options =
  { 0: nouns,
    1: verbs,
    2: adjectives,
    3: adverbs,
    nouns,
    verbs,
    adjectives,
    adverbs}
  let wordBank = []

  const question =
  `<h1>The ${sentence[0].word} ${sentence[1].word} ${sentence[2].word} ${sentence[3].word} the ${sentence[4].word} ${sentence[5].word}.</h1>
  <h1>Which word fits the sentence?</h1>`

  // adds all words to wordBank
  for (let i = 0; i < 4; i++) { wordBank = wordBank.concat(options[i]) }

  // filters out words of the same part of speech from wordBank
  const answerType = options[answer.declension]
  wordBank = wordBank.filter(word => !answerType.includes(word))

  const multipleChoiceUnshuffled = [answer.word]
  for (let i = 0; i < 4; i++) { multipleChoiceUnshuffled.push(wordBank[Math.random() * wordBank.length | 0]) }

  const multipleChoice = []

  // randomize choicesOutput
  for (let i = multipleChoiceUnshuffled.length; i > 0; i--) {
    const random = Math.random() * i | 0
    multipleChoice.push(multipleChoiceUnshuffled[random])
    multipleChoiceUnshuffled.splice(random, 1)
  }

  store.game.question = question
  store.game.answer = answer.word
  store.game.multipleChoice = multipleChoice
}

// which word makes sense in the sentence?

module.exports = generateProblem
