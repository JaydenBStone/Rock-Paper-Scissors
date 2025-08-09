//Play Game Modal
//DomMan 
const modal = document.getElementById('myModal');
const myBtn = document.getElementById('myBtn');
const span = document.getElementsByClassName('close')[0];
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


// Establish humanChoice as null
let getHumanChoice = null;

// Visual of human choice changing 
const humanChoice = document.getElementById('humanChoice');

// Onclick of img. Change humanChoice to img selected. Run getComputerChoice. Close Modal. Change choice html to the selected answer.
// Each img has same function as eachother
const scissors = document.getElementById('scissors');
scissors.onclick = function () {
  getHumanChoice = 'You chose scissors';
  modal.style.display = "none";
  humanChoice.innerHTML = `${getHumanChoice}`;
  getComputerChoice();
  return console.log(`human choice is set to ${getHumanChoice}`)
}
const paper = document.getElementById('paper');
paper.onclick = function () {
  getHumanChoice = 'You chose paper';
  modal.style.display = "none";
  humanChoice.innerHTML = `${getHumanChoice}`;
  getComputerChoice();
  return console.log(`human choice is set to ${getHumanChoice}`)
}
const rock = document.getElementById('rock');
rock.onclick = function () {
  getHumanChoice = 'You chose rock';
  modal.style.display = "none";
  humanChoice.innerHTML = `${getHumanChoice}`;
  getComputerChoice();
  return console.log(`human choice is set to ${getHumanChoice}`)
}

// Establish ComputerChoice as null
let ComputerChoice = null;
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
    console.log('3');
  } else if (randomNumber === 2) {
    ComputerChoice = 'paper';
    computerChoice.innerHTML = `Computer chose ${ComputerChoice}`;
    console.log('2');

  } else if (randomNumber === 1) {
    ComputerChoice = 'scissors';
    computerChoice.innerHTML = `Computer chose ${ComputerChoice}`;
    console.log('1');
  }
  console.log(`computer choice is set to ${ComputerChoice}`)
  return ComputerChoice
}

// Establish and Display Scores 
let human = 0;
let computer = 0;
const humanScore = document.querySelector('.humanScore');
humanScore.innerHTML = `Youre Score = ${human}`;
const computerScore = document.querySelector('.computerScore');
computerScore.innerHTML = `Computers Score = ${computer}`;


// Need to write logic for who wins rounds
// Computer chooses x and human choosed y. Score updates +1 

// Need to write logic for who wins game 
// If Computer or Human score = 5 reset rounds and variables to start/empty
// Want to do a pop up modal stating the winner. when the user clicks the X or outside of modal the game resets 