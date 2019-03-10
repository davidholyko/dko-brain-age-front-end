'use strict'

const nouns = ['dog', 'cat', 'horse', 'rabbit', 'cow', 'person', 'goat', 'wizard']
const verbs = ['jumped over', 'ran towards', 'looked at', 'ate', 'backed away from', 'talked to', 'bit', 'approached']
const adjectives = ['sleepy', 'hungry', 'angry', 'excited', 'curious', 'tall', 'happy', 'bewildered', 'green']
const adverbs = ['hastily', 'quickly', 'carefully', 'slowly', 'menacingly', 'abruptly', 'carelessly', 'calmly']

const subject = nouns[Math.random() * nouns.length | 0]
const object = nouns[Math.random() * nouns.length | 0]
const verb = verbs[Math.random() * verbs.length | 0]
const adverb = adverbs[Math.random() * adverbs.length | 0]
const subjectAdjective = adjectives[Math.random() * adjectives.length | 0]
const objectAdjective = adjectives[Math.random() * adjectives.length | 0]

const question = `The ${subjectAdjective} ${subject} ${adverb} ${verb} the ${objectAdjective} ${object}.`

console.log(question)
