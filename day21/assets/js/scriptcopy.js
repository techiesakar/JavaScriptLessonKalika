'use strict'

// selecting elements

const score0Ele = document.querySelector("#score--0")
const score1Ele = document.getElementById("score--1")

// getiing current score elements
const current0Ele = document.getElementById('current--0')
const current1Ele = document.getElementById('current--1')

const diceEle = document.querySelector(".dice")

const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// Selecting Player

const Player0Ele = document.querySelector(".player--0")
const Player1Ele = document.querySelector(".player--1")

// Player winner

// starting conditions
score0Ele.textContent = 0
score1Ele.textContent = 0

diceEle.classList.add("hidden")

// assigning initial value 
let currentScore = 0

let activePlayer = 0

const scores = [0, 0]

let playing = truez


btnRoll.addEventListener('click', function () {

  if (playing) {
    const dice = Math.floor(Math.random() * 6) + 1

    diceEle.classList.remove("hidden")

    diceEle.src = `assets/images/dice-${dice}.png`

    if (dice !== 1) {
      currentScore += dice
      document.getElementById(`current--${activePlayer}`).textContent = currentScore
    }
    else {
      // Switching Player
      switchPlayer()
    }
  }
})

btnHold.addEventListener('click', function () {
  // First save data of current user
  if (playing) {
    scores[activePlayer] += currentScore
    document.getElementById(`current--${activePlayer}`).textContent = scores[activePlayer]

    // then switch user
    if (scores[activePlayer] >= 10) {
      playing = false
      // finish the game
      document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")

      Player0Ele.classList.remove("player--active")
      Player1Ele.classList.remove("player--active")

    }
    switchPlayer()
  }

})

function switchPlayer() {
  currentScore = 0
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

  document.getElementById(`current--${activePlayer}`).textContent = 0

  Player0Ele.classList.toggle("player--active")
  Player1Ele.classList.toggle("player--active")
  activePlayer = activePlayer === 0 ? 1 : 0
}