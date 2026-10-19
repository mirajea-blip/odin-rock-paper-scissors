// score tracking variables 
let humanScore = 0;
let computerScore = 0;

const playButtons = document.querySelector(".playButtons");
const rockButton = playButtons.firstElementChild;
const scissorsButton = playButtons.lastElementChild;
const paperButton = scissorsButton.previousElementSibling;

const computerScoreBoard = document.querySelector("p").firstElementChild;
const playerScoreBoard = document.querySelector("p").lastElementChild;
const roundResult = document.querySelector(".roundResult").firstElementChild;
const gameResult = document.querySelector(".gameResult").firstElementChild;

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

function endGame() {

    if (computerScore === 5) {

        gameResult.textContent = " THE COMPUTER WON ";
        while (playButtons.hasChildNodes()) {
            playButtons.removeChild(playButtons.firstChild);
        }

    } else if (humanScore === 5) {

        gameResult.textContent = " THE PLAYER WON ";
        while (playButtons.hasChildNodes()) {
            playButtons.removeChild(playButtons.firstChild);
        }

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

    endGame();

}

rockButton.addEventListener("click", () => {playRound("ROCK")});
paperButton.addEventListener("click", () => {playRound("PAPER")});
scissorsButton.addEventListener("click", () => {playRound("SCISSORS")});



