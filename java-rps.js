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

function getHumanChoice() {
    let choice = prompt("what do you choose (r, p, or s)?", " ")

    if (choice.toLowerCase() === "r") {
        return 'human chooses rock';
    } else if (choice.toLowerCase() === "p") {
        return 'human chooses paper';
    } else if (choice.toLowerCase() === "s") {
        return 'human chooses scissors';
    } else {
        return "not a good answer";
    }
}

console.log(getHumanChoice());

console.log("the computer chooses " + getComputerChoice());

let humanScore = 0;
let computerScore = 0;