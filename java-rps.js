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

// function playGame() { // pretty sure this function is unnecessary now

let humanScore = 0;
let computerScore = 0;

function addHumanScore() {
    humanScore++;
}

function addComputerScore () {
    computerScore++;
}

function sameChoice() {
    // unnecessary?
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


 