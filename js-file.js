function computerPlay() {
    // Generate a random integer from 0 - 2 
    // 0: rock, 1: paper, 2: scissors
    // Use conditionals to return the correct computer choice
    let choiceNum = Math.floor(Math.random() * 3);
    let computerPick;
    switch(choiceNum) {
        case 0:
            computerPick = "rock";
            break;
        case 1:
            computerPick = "paper";
            break;
        default:
            computerPick = "scissors"
    }

    return computerPick;
}

function displayResults(result) {
    const resultPara = document.querySelector(".roundResult");
    resultPara.textContent = result;

    let playerScore = document.querySelector(".playerScore");
    let computerScore = document.querySelector(".computerScore");
}

function playRound(event) {
    // given plaer selection and computer selection, determine who wins


    // first get the text content from the button, and convert to lower case
    const playerSelection = event.target.textContent.toLowerCase();
    // then, get the computer's pick
    const computerSelection = computerPlay();


    console.log(`\nMy choice: ${playerSelection}`);
    console.log(`Computer's choice: ${computerSelection}`);

    // now for each player choice available, specify the outcome of the clash with computer

    let roundResult = "";

    if(playerSelection === computerSelection){
        console.log("It's a tie!");
        roundResult = "tie";
    }

    if(playerSelection === "rock"){
        if(computerSelection === "scissors") {
            console.log("You win! Rock beats scissors.");
            roundResult = "User";
        }
        else if(computerSelection === "paper"){
            console.log("You lose! Paper beats rock.");
            roundResult = "Computer"
        }
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            console.log("You win! Paper beats Rock.");
            roundResult = "User";
        }
        else if(computerSelection === "scissors"){
            console.log("You lose! Scissors beat paper.");
            roundResult = "Computer";
        }
    }
    else if(playerSelection === "scissors"){
        if(computerSelection === "paper"){
            console.log("You win! Scissors beat paper.");
            roundResult = "User";
        }
        else if(computerSelection === "rock"){
            console.log("You lose! Rock beats scissors.");
            roundResult = "Computer"
        }
    }
    // invalid user input!
    else {
        console.log("Invalid choice! Choose rock, paper, or scissors!");
        roundResult = "invalid";
    }

    displayResults(roundResult);
}

function getWinner(userTally, computerTally){
    if(userTally > computerTally){
        return "You win the game! Congrats!";
    } else if(userTally < computerTally){
        return "You lost the game! Computer wins";
    } else {
        return "It's a draw. What a game!";
    }
}

function game(){
    // tally for number of wins
    let userTally = 0;
    let computerTally = 0;
    for(let i = 0; i < 5; i++){
        let myChoice = prompt("What is your pick?");
        let winner = playRound(myChoice, computerPlay());
        // if user wins, increase user tally
        // else, increase computer tally
        if(winner === "User"){
            userTally++;
        } else if (winner === "Computer"){
            computerTally++;
        }
        console.log("\n");
    }
    
    // use the getWinner function to compare tallies and output the winner (if one exists).
    console.log(getWinner(userTally, computerTally));
}

function getPlayerChoice(event) {
    console.log(event.target);
    alert(`Hello! Thanks for choosing ${event.target.textContent}`);
}

const buttons = document.querySelectorAll(".choice");
buttons.forEach((button) => {

    button.addEventListener('click', playRound);

});