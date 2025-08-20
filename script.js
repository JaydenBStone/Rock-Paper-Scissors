//Play Game Modal
// DOM Elements 
const modal = document.getElementById('myModal');
const myBtn = document.getElementById('myBtn');
const span = document.getElementsByClassName('close')[0];

const choices = document.querySelectorAll('.choice')
const humanChoiceDisplay = document.getElementById('humanChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');

const scoreBoard = document.querySelector('.scoreBoard')
const humanScoreDisplay= document.querySelector('.humanScore');
const computerScoreDisplay = document.querySelector('.computerScore');




// Establish Variables
let human = 0;
let computer = 0;
let computerChoice = '';
let humanChoice = '';


// Open Modal, Modal Control
myBtn.onclick = function () {
  modal.style.display = 'block';
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




// Set computerChoice
function getComputerChoice() {
  function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
  }
  let randomNumber = getRandomNumber();

  if (randomNumber === 3) {
    computerChoice = 'rock';
    computerChoiceDisplay.innerHTML = `Computer chose ${computerChoice}`;
  } else if (randomNumber === 2) {
    computerChoice = 'paper';
    computerChoiceDisplay.innerHTML = `Computer chose ${computerChoice}`;
  } else if (randomNumber === 1) {
    computerChoice = 'scissors';
    computerChoiceDisplay.innerHTML = `Computer chose ${computerChoice}`;
  }
  console.log(`computer choice is set to ${computerChoice}`)
  return computerChoice
}

// Change score 
function Score() {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return;
  }
  if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock')
  ) {
    human++;
  } else {
    computer++;
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
}








