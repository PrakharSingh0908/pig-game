'use strict';

//Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
let diceNumber;
const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
score0El.textContent = 0;
score1El.textContent = 0;
let playing = true;

// function getActivePlayer (activePlayer){
//     return document.querySelector(`.player--${activePlayer}`)
// }

function activate(activePlayer) {
    document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
}
function deactivate(activePlayer) {
    document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
}

const showDice = function () {
    diceEl.classList.remove('hidden');
};

const generateNumber = function () {
    diceNumber = Math.trunc(Math.random() * 6 + 1);
    return diceNumber;
};

if (playing === false) {
}

btnRoll.addEventListener('click', function () {
    if (playing) {
        //Generating random dice roll
        generateNumber();

        //Dispalying dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${diceNumber}.png`;

        //Check for roll 1
        if (diceNumber !== 1) {
            currentScore += diceNumber;
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
            console.log(activePlayer);
        } else {
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            currentScore = 0;
            deactivate(activePlayer);
            activePlayer = activePlayer === 0 ? 1 : 0; //short and concise code
            activate(activePlayer);
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent =
            currentScore;
        deactivate(activePlayer);
        activePlayer = activePlayer === 0 ? 1 : 0; //short and concise code
        activate(activePlayer);
    }
});

btnNew.addEventListener('click', function () {
    diceEl.classList.add('hidden');
    currentScore = 0;
    document.getElementById(`current--0`).textContent = currentScore;
    document.getElementById(`current--1`).textContent = currentScore;
    document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--winner');
    document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    activePlayer = 0;
    document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
    playing = true;
    score0El.textContent = 0;
    score1El.textContent = 0;
    scores[0] = 0;
    scores[1] = 0;
    score0El.textContent = scores[0];
    score1El.textContent = scores[1];
});
