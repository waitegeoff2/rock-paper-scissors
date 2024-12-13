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


function playGame() {

let humanScore = 0;
let computerScore = 0;

function addHumanScore() {
    humanScore++;
    const humanMessage = "your score is " + humanScore + " and the computer's score is " + computerScore + ".";
    console.log(humanMessage);
}

function addComputerScore () {
    computerScore++;
    const computerMessage = "your score is " + humanScore + " and the computer's score is " + computerScore + ".";
    console.log(computerMessage);
}

function sameChoice() {
    const tieMessage = "your score is " + humanScore + " and the computer's score is " + computerScore + ".";
    console.log(tieMessage);
}

function playRound(humanChoice, computerChoice) {
    
    humanChoice =  prompt("rock, paper, or scissors?", " ");

    number = Math.random();
   if (number <= 0.33) {
    computerChoice = 'rock'; 
   } else if (number >= 0.33 && number <= 0.66) {
    computerChoice = 'paper';
   } else if (number >= 0.66) {
    computerChoice = 'scissors';
   }

    if (humanChoice.toLowerCase() == computerChoice) {
        sameChoice();
        console.log("It's a tie! You selected " + humanChoice + " and computer selected " + computerChoice + "!");
    } else if (humanChoice.toLowerCase() === 'rock' && computerChoice == 'scissors' || humanChoice.toLowerCase() === 'paper' && computerChoice === 'rock' || humanChoice.toLowerCase() === 'scissors' && computerChoice === 'paper') {
        addHumanScore();
        console.log("You win! You selected " + humanChoice + " and computer selected " + computerChoice + "!");
    } else if (humanChoice.toLowerCase() === 'rock' && computerChoice == 'paper' || humanChoice.toLowerCase() === 'paper' && computerChoice === 'scissors' || humanChoice.toLowerCase() === 'scissors' && computerChoice === 'rock') {
        addComputerScore();
        console.log("You lose! You selected " + humanChoice + " and computer selected " + computerChoice + "!");
    } else {
        console.log("Wrong answer dude");
    }
    

    // human choice = comp, tie
    // human choice = rock && computer choice = 
    // human choice = rock && computer choice = scissors = you lose
}


playRound("", "");

playRound("", "");

playRound("", "");

playRound("", "");

playRound("", "");

}

playGame();





// what did human pick? 
// what did computer pick? 
// did human win? 
// if yes (score + 1)

// playgame

//score variables
//playround
    // asks prompt
    //gets result and calls computer pick
    //compares them for the rules of rps
    //returns statement for wins and losses
    //updates score

    //loops playround


 