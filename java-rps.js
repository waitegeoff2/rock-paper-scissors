function getComputerChoice() {
    const number = Math.random();
   if (number <= 0.33) {
    return 'rock'; // has to be a value in here let value = rock?
   } else if (number >= 0.33 && number <= 0.66) {
    return 'paper';
   } else if (number >= 0.66) {
    return 'scissors';
   }

}

console.log(getComputerChoice());

