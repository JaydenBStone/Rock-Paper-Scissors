//Play Game Modal
// DOM Elements 
const modal = document.getElementById('myModal');
const myBtn = document.getElementById('myBtn');
const span = document.getElementsByClassName('close')[0];
const humanScore = document.querySelector('.humanScore');
const computerScore = document.querySelector('.computerScore');
const choices = document.querySelectorAll('.choice')

// Display modal onclick "modal.style.display = 'block';"
myBtn.onclick = function () {
  modal.style.display = 'block';
}
// Close modal onclick of span(x) " modal.style.display = "none";"
span.onclick = function () {
  modal.style.display = "none";
}
// Close modal if click outside modal window " modal.style.display = "none";"
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Establish and Display Scores 
let human = 0;
let computer = 0;

humanScore.innerHTML = `Youre Score = ${human}`;
computerScore.innerHTML = `Computers Score = ${computer}`;

// Establish humanChoice as null
let getHumanChoice = '';












// Visual of human choice changing 
const humanChoice = document.getElementById('humanChoice');

// Onclick of img. Change humanChoice to img selected. Run getComputerChoice. Close Modal. Change choice html to the selected answer.
// Each img has same function as eachother
const scissors = document.getElementById('scissors');
scissors.onclick = function () {
  getHumanChoice = 'scissors';
  modal.style.display = "none";
  humanChoice.innerHTML = `You chose ${getHumanChoice}`;
  getComputerChoice();
  Score();
  return console.log(`human choice is set to ${getHumanChoice}`)
}
const paper = document.getElementById('paper');
paper.onclick = function () {
  getHumanChoice = 'paper';
  modal.style.display = "none";
  humanChoice.innerHTML = `You chose ${getHumanChoice}`;
  getComputerChoice();
  Score();
  return console.log(`human choice is set to ${getHumanChoice}`)
}
const rock = document.getElementById('rock');
rock.onclick = function () {
  getHumanChoice = 'rock';
  modal.style.display = "none";
  humanChoice.innerHTML = `You chose ${getHumanChoice}`;
  getComputerChoice();
  Score();
  return console.log(`human choice is set to ${getHumanChoice}`)
}












// Establish ComputerChoice as null
let ComputerChoice = '';
const computerChoice = document.getElementById('computerChoice');

// Computer Choice Function
function getComputerChoice() {
  function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
  }
  let randomNumber = getRandomNumber();

  if (randomNumber === 3) {
    ComputerChoice = 'rock';
    computerChoice.innerHTML = `Computer chose ${ComputerChoice}`;
  } else if (randomNumber === 2) {
    ComputerChoice = 'paper';
    computerChoice.innerHTML = `Computer chose ${ComputerChoice}`;
  } else if (randomNumber === 1) {
    ComputerChoice = 'scissors';
    computerChoice.innerHTML = `Computer chose ${ComputerChoice}`;
  }
  console.log(`computer choice is set to ${ComputerChoice}`)
  return ComputerChoice
}

function Score() {
  if (getHumanChoice === ComputerChoice) {
    console.log("It's a tie!");
    return;
  }
  if (
    (getHumanChoice === 'rock' && ComputerChoice === 'scissors') ||
    (getHumanChoice === 'scissors' && ComputerChoice === 'paper') ||
    (getHumanChoice === 'paper' && ComputerChoice === 'rock')
  ) {
    human++;
    console.log('human wins round')
    console.log(human)
  } else {
    computer++;
    console.log('computer wins round')
    console.log(computer)
  }
  humanScore.innerHTML = `Youre Score = ${human}`;
  computerScore.innerHTML = `Computers Score = ${computer}`;

  checkWinner();
}


function checkWinner() {
  if (human === 5 || computer === 5) {
    let winner = human === 5 ? "Human Wins!" : 'Computer Wins!';
    alert(winner);
    resetGame()
  }
}


function resetGame() {
  human = 0;
  computer = 0;
}




// choices.forEach(choice => {
//   choice.addEventListener('click', () => {
//     getHumanChoice = choice.dataset.value;
//     modal.style.display = "none";
//     humanChoice.innerHTML = `You chose ${getHumanChoice}`;
//     getComputerChoice();
//     Score();
//     console.log(`human choice is set to ${getHumanChoice}`);
//   });
// });