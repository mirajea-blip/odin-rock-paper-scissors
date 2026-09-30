// score tracking variables 
let humanScore = 0;
let computerScore = 0; 

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

