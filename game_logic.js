// score tracking variables 
let humanScore = 0;
let computerScore = 0;

const playButtons = document.querySelector(".playButtons");
const rockButton = playButtons.firstElementChild;
const scissorsButton = playButtons.lastElementChild;
const paperButton = scissorsButton.previousElementSibling;

const computerScoreBoard = document.querySelector("p").firstElementChild;
const playerScoreBoard = document.querySelector("p").lastElementChild;
const roundResult = document.querySelector(".result").firstElementChild;

const getComputerChoice = () => {

    // get a number between 0 and 3 (3 is not included)
    const choiceNumber = Math.random()*3;

    // define computer choice based on the number 
    if (choiceNumber<1) {
        return "rock"
    } 

    else if (choiceNumber>=1 && choiceNumber<2) {
        return "paper"
    }

    else {
        return "scissors"
    }

}

function playRound(humanChoice) {

    const computerChoice = getComputerChoice();

    // Deal with tie case
    if (computerChoice.toUpperCase() === humanChoice.toUpperCase()) {

        roundResult.textContent = "It's a tie !"

    }

    else if (computerChoice === "rock") {

        // Compare human and computer choices then send winning or losing messages
        // while keeping track of the score
        if (humanChoice.toUpperCase() === "PAPER") {

            humanScore += 1; 
            playerScoreBoard.textContent = humanScore;
            roundResult.textContent = "You win ! Paper beats rock "

        } else {

            computerScore += 1;
            computerScoreBoard.textContent = computerScore;
            roundResult.textContent = "You lose ! Scissors loses to rock "

        }

    }

    else if (computerChoice === "paper") {

        if (humanChoice.toUpperCase() === "SCISSORS") {

            humanScore += 1;
            playerScoreBoard.textContent = humanScore;
            roundResult.textContent = "You win ! Scissors beats paper "

        } else {

            computerScore += 1;
            computerScoreBoard.textContent = computerScore;
            roundResult.textContent = "You lose ! Rock loses to paper "

        }

    }

    else {

        if (humanChoice.toUpperCase() === "ROCK") {

            humanScore += 1;
            playerScoreBoard.textContent = humanScore;
            roundResult.textContent = "You win ! Rock beats scissors "

        } else {

            computerScore += 1;
            computerScoreBoard.textContent = computerScore;
            roundResult.textContent = "You lose ! Paper loses to scissors "

        }

    }

}

rockButton.addEventListener("click", () => {playRound("ROCK")});
paperButton.addEventListener("click", () => {playRound("PAPER")});
scissorsButton.addEventListener("click", () => {playRound("SCISSORS")});


// show the winner or the tie message
if (humanScore > computerScore) {

    console.log("Congratulations, you won " + humanScore + " to " + computerScore + " ! " )

} else if (humanScore < computerScore) {

    console.log("You lost " + humanScore + " to " + computerScore + ", don't give up and try again ! " )

} else {

    console.log("It's a tie " + humanScore + " to " + computerScore + " !  Let's play again !")

}



