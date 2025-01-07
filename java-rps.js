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


// function getHumanChoice() {
//     let choice = prompt("rock, paper, or scissors?", " ")

//     if (choice.toLowerCase() === "rock") {
//         return 'rock';
//     } else if (choice.toLowerCase() === "paper") {
//         return 'paper';
//     } else if (choice.toLowerCase() === "scissors") {
//         return 'scissors';
//     } else {
//         return 'a bad answer. try again dude';
//     }
// }


// function playGame() { // pretty sure this function is unnecessary now

let humanScore = 0;
let computerScore = 0;

function addHumanScore() {
    humanScore++;
    // const humanMessage = "your score is " + humanScore + " and the computer's score is " + computerScore + ".";
}

function addComputerScore () {
    computerScore++;
    // const computerMessage = "your score is " + humanScore + " and the computer's score is " + computerScore + ".";
}

function sameChoice() {
    // const tieMessage = "your score is " + humanScore + " and the computer's score is " + computerScore + ".";
}

function playRound(humanChoice, computerChoice) {

    const results = document.querySelector("#results");
    
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

        const tiemessage = document.createElement("div");
        tiemessage.classList.add("tiemessage");
        tiemessage.textContent = "It's a tie! You selected " + humanChoice + " and computer selected " + computerChoice + "! Your score is " + humanScore + " and the computer's score is " + computerScore + ".";

        results.appendChild(tiemessage);


        // console.log("It's a tie! You selected " + humanChoice + " and computer selected " + computerChoice + "! Your score is " + humanScore + " and the computer's score is " + computerScore + ".");
    } else if (humanChoice.toLowerCase() === 'rock' && computerChoice == 'scissors' || humanChoice.toLowerCase() === 'paper' && computerChoice === 'rock' || humanChoice.toLowerCase() === 'scissors' && computerChoice === 'paper') {
        addHumanScore();

        const winmessage = document.createElement("div");
        winmessage.classList.add("winmessage");
        winmessage.textContent = "You win! You selected " + humanChoice + " and computer selected " + computerChoice + "! Your score is " + humanScore + " and the computer's score is " + computerScore + ".";

        results.appendChild(winmessage);

        // console.log("You win! You selected " + humanChoice + " and computer selected " + computerChoice + "! Your score is " + humanScore + " and the computer's score is " + computerScore + ".");
    } else if (humanChoice.toLowerCase() === 'rock' && computerChoice == 'paper' || humanChoice.toLowerCase() === 'paper' && computerChoice === 'scissors' || humanChoice.toLowerCase() === 'scissors' && computerChoice === 'rock') {
        addComputerScore();
        
        const losemessage = document.createElement("div");
        losemessage.classList.add("losemessage");
        losemessage.textContent = "You lose! You selected " + humanChoice + " and computer selected " + computerChoice + "! Your score is " + humanScore + " and the computer's score is " + computerScore + ".";

        results.appendChild(losemessage);

        // console.log("You lose! You selected " + humanChoice + " and computer selected " + computerChoice + "! Your score is " + humanScore + " and the computer's score is " + computerScore + ".");
    } else {

        const wrongmessage = document.createElement("div");
        wrongmessage.classList.add("wrongmessage");
        wrongmessage.textContent = "Wrong answer dude";

        results.appendChild(wrongmessage);

    }

    if (humanScore == 5) {
        const gamewon = document.createElement("div");
        gamewon.classList.add("gamewon");
        gamewon.textContent = "CONGRATS, you have won the game with " + humanScore + " points!";

        results.appendChild(gamewon);
    }

    if (computerScore == 5) {
        const gamelost = document.createElement("div");
        gamelost.classList.add("gamelost");
        gamelost.textContent = "SORRY, you have lost the game, the computer scored " + computerScore + " points. Try again.";
        
        results.appendChild(gamelost);
    }

    // * RUN AN IF statement to add a text div if humanscore is "you win the round!"
    // * RUN AND IF statment if compscore is 5 "computer wins the round"
    

}

document.addEventListener("DOMContentLoaded", () => {

    const rock = document.querySelector("#rock");

    rock.addEventListener("click", () => {
    playRound("rock", "");
    });

});

document.addEventListener("DOMContentLoaded", () => {

    const paper = document.querySelector("#paper");

    paper.addEventListener("click", () => {
    playRound("paper", "");
    });

});

document.addEventListener("DOMContentLoaded", () => {

    const scissors = document.querySelector("#scissors");

    scissors.addEventListener("click", () => {
    playRound("scissors", "");
    });

});


// }

// playGame();


// playGame();


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


 