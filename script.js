let computerChoice = 0;
let humanChoice = 0;


// Play Game Modal

// DomMan
var modal = document.getElementById('myModal');
var myBtn = document.getElementById('myBtn');
var span = document.getElementsByClassName('close')[0];
// Display modal onclick "modal.style.display = 'block';"
myBtn.onclick = function() {
  modal.style.display = 'block';
}
// Close modal onclick of span(x) " modal.style.display = "none";"
span.onclick = function() {
  modal.style.display = "none";
}
// Close modal if click outside modal window " modal.style.display = "none";"
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
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
  } else if (getRandomNumber() === 1){
    console.log('one')
  }
}
getComputerChoice();
