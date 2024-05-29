'use strict'

// selecting elements

const score0Ele = document.querySelector("#score--0")
const score1Ele = document.getElementById("score--1")

// getiing current score elements
const current0Ele = document.getElementById('current--0')
const current1Ele = document.getElementById('current--1')

const diceEle = document.querySelector(".dice")

const btnRoll = document.querySelector('.btn--roll')



// starting conditions
score0Ele.textContent = 0
score1Ele.textContent = 0

diceEle.classList.add("hidden")

// assigning initial value 
let currentScore = 0

let activePlayer = 0



btnRoll.addEventListener('click', function () {

  const dice = Math.floor(Math.random() * 6) + 1

  diceEle.classList.remove("hidden")

  diceEle.src = `assets/images/dice-${dice}.png`

  if (dice !== 1) {
    currentScore += dice
    document.getElementById(`current--${activePlayer}`).textContent = currentScore

  }
  else {


    currentScore = 0

    let currentPlayerSection = document.querySelector(`.player--${activePlayer}`)

    document.getElementById(`current--${activePlayer}`).textContent = currentScore

    currentPlayerSection.classList.remove("player--active")

    activePlayer = activePlayer === 0 ? 1 : 0

    currentPlayerSection = document.querySelector(`.player--${activePlayer}`)

    currentPlayerSection.classList.add("player--active")

  }


})

