//Play Game Modal
// DOM Elements 
const modal = document.getElementById('myModal');
const myBtn = document.getElementById('myBtn');
const span = document.getElementsByClassName('close')[0];

const choices = document.querySelectorAll('.choice')
const humanChoiceDisplay = document.getElementById('humanChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');

const scoreBoard = document.querySelector('.scoreBoard')
const humanScoreDisplay = document.querySelector('.humanScore');
const computerScoreDisplay = document.querySelector('.computerScore');

const roundStateDisplay = document.querySelector('.roundState')


// Establish Variables
let human = 0;
let computer = 0;
let computerChoice = '';
let humanChoice = '';


// Open Modal, Modal Control
myBtn.onclick = function () {
  modal.style.display = 'block';
  btnTextContent()
}
// Close modal 
span.onclick = function () {
  modal.style.display = "none";
}
// Close modal if click outside modal window 
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function btnTextContent() {
  if (myBtn.textContent === 'Play Game') {
    myBtn.textContent = 'Play Round'
  }
}

// Set humanChoice 
choices.forEach(choice => {
  choice.addEventListener('click', () => {
    humanChoice = choice.dataset.value;
    modal.style.display = "none";
    humanChoiceDisplay.innerHTML = `You chose ${humanChoice}`;
    getComputerChoice();
    Score();
    console.log(`human choice is set to ${humanChoice}`);
  });
});

function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
  }


// Set computerChoice
function getComputerChoice() {
  
  let randomNumber = getRandomNumber();

  if (randomNumber === 3) {
    computerChoice = 'Rock';
    computerChoiceDisplay.innerHTML = `Computer chose ${computerChoice}`;
  } else if (randomNumber === 2) {
    computerChoice = 'Paper';
    computerChoiceDisplay.innerHTML = `Computer chose ${computerChoice}`;
  } else if (randomNumber === 1) {
    computerChoice = 'Scissors';
    computerChoiceDisplay.innerHTML = `Computer chose ${computerChoice}`;
  }
  console.log(`computer choice is set to ${computerChoice}`)
  return computerChoice
}

// Change score 
function Score() {
  if (humanChoice === computerChoice) {
    roundStateDisplay.innerHTML = "Its a Tie!";
    return;
  }
  if (
    (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper') ||
    (humanChoice === 'Paper' && computerChoice === 'Rock')
  ) {
    human++;
    roundStateDisplay.innerHTML = `${humanChoice} beats ${computerChoice}, Human wins this round!`;
  } else {
    computer++;
    roundStateDisplay.innerHTML = `${computerChoice} beats ${humanChoice}, Computer wins this round!`;
  }
  humanScoreDisplay.innerHTML = `Youre Score = ${human}`;
  computerScoreDisplay.innerHTML = `Computers Score = ${computer}`;
  checkWinner();
}

// Check winner 
function checkWinner() {
  if (human === 3 || computer === 3) {
    let winner = human === 3 ? "Human Wins!" : 'Computer Wins!';
    alert(winner);
    resetGame()
  }
}

// Reset game
function resetGame() {
  human = 0;
  computer = 0;
  humanChoiceDisplay.innerHTML = '';
  computerChoiceDisplay.innerHTML = '';
  humanScoreDisplay.innerHTML = '';
  computerScoreDisplay.innerHTML = '';
  myBtn.textContent = 'Play Game'
  roundStateDisplay .innerHTML = '';
}








