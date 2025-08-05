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