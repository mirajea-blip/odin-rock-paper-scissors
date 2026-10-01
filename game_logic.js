playGame();

function  playGame() {
    
    function playRound(humanChoice, computerChoice) {

        // Deal with tie case
        if (computerChoice.toUpperCase() === humanChoice.toUpperCase()) {

            console.log("It's a tie !")

        }

        else if (computerChoice === "rock") {

            // Compare human and computer choices then send winning or losing messages
            // while keeping track of the score
            if (humanChoice.toUpperCase() === "PAPER") {

                humanScore += 1;
                console.log("You win ! Paper beats rock ")

            } else {

                computerScore += 1;
                console.log("You lose ! Scissors loses to rock ")

            }

        }

        else if (computerChoice === "paper") {

            if (humanChoice.toUpperCase() === "SCISSORS") {

                humanScore += 1;
                console.log("You win ! Scissors beats paper ")

            } else {

                computerScore += 1;
                console.log("You lose ! Rock loses to paper ")

            }

        }

        else {

            if (humanChoice.toUpperCase() === "ROCK") {

                humanScore += 1;
                console.log("You win ! Rock beats scissors ")

            } else {

                computerScore += 1;
                console.log("You lose ! Paper loses to scissors ")

            }

        }

    }

    // score tracking variables 
    let humanScore = 0;
    let computerScore = 0;

    // play the 5 rounds
    for (i=0; i<=5; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

    }

    // show the winner or the tie message
    if (humanScore > computerScore) {

        console.log("Congratulations, you won" + humanScore + " to " + computerScore + " ! " )

    } else if (humanScore < computerScore) {

        console.log("You lost " + humanScore + " to " + computerScore + ", don't give up and try again ! " )

    } else {

        console.log("It's a tie " + humanScore + " to " + computerScore + " !  Let's play again !")

    }

}


function getHumanChoice() {

    // Get the choice made by the player
    const humanChoice = prompt("Choose rock, paper or scissors")

    return humanChoice

}

function getComputerChoice() {

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

