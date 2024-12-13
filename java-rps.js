function getComputerChoice() {
    const number = Math.random();
   if (number <= 0.33) {
    return 'rock'; 
   } else if (number >= 0.33 && number <= 0.66) {
    return 'paper';
   } else if (number >= 0.66) {
    return 'scissors';
   }

}

function getHumanChoice() {
    let choice = prompt("rock, paper, or scissors?", " ")

    if (choice.toLowerCase() === "rock") {
        return 'rock';
    } else if (choice.toLowerCase() === "paper") {
        return 'paper';
    } else if (choice.toLowerCase() === "scissors") {
        return 'scissors';
    } else {
        return 'a bad answer. try again dude';
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const playerWins = "You win! You selected " + humanChoice + " and computer selected " + computerChoice + "! Your score is " + humanScore + " and computer score is " + computerScore;
    const computerWins = "You lose! You selected " + humanChoice + " and computer selected " + computerChoice + "! Your score is " + humanScore + " and computer score is " + computerScore;
    const tieGame = "It's a tie! You selected " + humanChoice + " and computer selected " + computerChoice + "! Your score is " + humanScore + " and computer score is " + computerScore;
    const badAnswer = "Wrong answer dude";

    if (humanChoice == computerChoice) {
        return tieGame;
    } else if (humanChoice === 'rock' && computerChoice == 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        return playerWins;
    } else if (humanChoice === 'rock' && computerChoice == 'paper' || humanChoice === 'paper' && computerChoice === 'scissors' || humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        return computerWins;
    } else {
        return badAnswer;
    }
    

    // human choice = comp, tie
    // human choice = rock && computer choice = 
    // human choice = rock && computer choice = scissors = you lose
}

const humanSelection = getHumanChoice();
const computerSelection =getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(playRound(humanSelection, computerSelection));
