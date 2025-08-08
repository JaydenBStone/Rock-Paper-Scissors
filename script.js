
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

// Visual of humans choice changing 
const choice = document.getElementById('choice')

// Onclick of img. Change humanChoice to img selected. Close Modal. Change choice html to the selected answer.
// Each img has same function as eachother
const scissors = document.getElementById('scissors')
scissors.onclick = function(){
  let getHumanChoice = 'scissors'
  modal.style.display = "none";
  choice.innerHTML = `${getHumanChoice}`
  return console.log(`human choice is set to ${getHumanChoice}`)
}
const paper = document.getElementById('paper')
paper.onclick = function(){
 let getHumanChoice = 'paper'
  modal.style.display = "none";
  choice.innerHTML = `${getHumanChoice}`
  return console.log(`human choice is set to ${getHumanChoice}`)
}
const rock = document.getElementById('rock')
rock.onclick = function(){
 let getHumanChoice = 'rock'
  modal.style.display = "none";
  choice.innerHTML = `${getHumanChoice}`
  return console.log(`human choice is set to ${getHumanChoice}`)
}

// Computer Choice Function
function getComputerChoice() {
  function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
  }
  if (getRandomNumber() === 3) {
    console.log('three')
  } else if (getRandomNumber() === 2) {
    console.log('two')
  } else if (getRandomNumber() === 1) {
    console.log('one')
  }
}
getComputerChoice();


