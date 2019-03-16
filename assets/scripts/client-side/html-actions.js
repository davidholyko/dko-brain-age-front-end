const store = require('../store')
const view = require('../view/view')

const resetHearts = () => {
  const hearts =
    `<div id="game-hearts">
      <img id="heart-0" class="heart" src="public/images/full-heart.png" alt="">
      <img id="heart-1" class="heart" src="public/images/full-heart.png" alt="">
      <img id="heart-2" class="heart" src="public/images/full-heart.png" alt="">
      <img id="heart-3" class="heart" src="public/images/full-heart.png" alt="">
      <img id="heart-4" class="heart" src="public/images/full-heart.png" alt="">
    </div>`

  $('#game-hearts').replaceWith(hearts)
}

const resetScore = () => { $('#game-score').html('') }
const resetTimer = () => { $('#game-timer').html('') }

const updateGameDisplay = () => {
  console.log('updateGameDisplay')
  $('#game-display').empty()
  $('#game-display').append(`${store.game.question}`)
  $('#option-0').text(`${store.game.multipleChoice[0]}`)
  $('#option-1').text(`${store.game.multipleChoice[1]}`)
  $('#option-2').text(`${store.game.multipleChoice[2]}`)
  $('#option-3').text(`${store.game.multipleChoice[3]}`)
  $('#option-4').text(`${store.game.multipleChoice[4]}`)

  if (store.game.over) {
    $('#game-display').html('<h1 id="game-display-text" class="d-flex align-items-center justify-content-center w-100">Want to play again? Click here!</h1>')
    view.shadeGameDisplay()
  }
}

module.exports = {
  resetHearts,
  resetScore,
  resetTimer,
  updateGameDisplay
}
