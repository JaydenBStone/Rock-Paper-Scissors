

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
  getHumanChoice = 'scissors';
  modal.style.display = "none";
  humanChoice.innerHTML = `${getHumanChoice}`;
  getComputerChoice();
  return console.log(`human choice is set to ${getHumanChoice}`)
}
const paper = document.getElementById('paper');
paper.onclick = function () {
  getHumanChoice = 'paper';
  modal.style.display = "none";
  humanChoice.innerHTML = `${getHumanChoice}`;
  getComputerChoice();
  return console.log(`human choice is set to ${getHumanChoice}`)
}
const rock = document.getElementById('rock');
rock.onclick = function () {
  getHumanChoice = 'rock';
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
    computerChoice.innerHTML = `${ComputerChoice}`;
    console.log('3');
  } else if (randomNumber === 2) {
    ComputerChoice = 'paper';
    computerChoice.innerHTML = `${ComputerChoice}`;
    console.log('2');

  } else if (randomNumber === 1) {
    ComputerChoice = 'scissors';
    computerChoice.innerHTML = `${ComputerChoice}`;
    console.log('1');
  }
  console.log(`computer choice is set to ${ComputerChoice}`)
  return ComputerChoice
}



