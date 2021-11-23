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

function playRound(playerSelection, computerSelection) {
    // given plaer selection and computer selection, determine who wins
    // first, convert playerSelection string to lower case for easy comparison
    playerSelection = playerSelection.toLowerCase();

    console.log(`My choice: ${playerSelection}`);
    console.log(`Computer's choice: ${computerSelection}`);

    // now for each player choice available, specify the outcome of the clash with computer

    if(playerSelection === computerSelection){
        console.log("It's a tie!");
        return "tie";
    }

    if(playerSelection === "rock"){
        if(computerSelection === "scissors") {
            console.log("You win! Rock beats scissors.");
            return "User";
        }
        else if(computerSelection === "paper"){
            console.log("You lose! Paper beats rock.");
            return "Computer"
        }
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            console.log("You win! Paper beats Rock.");
            return "User";
        }
        else if(computerSelection === "scissors"){
            console.log("You lose! Scissors beat paper.");
            return "Computer";
        }
    }
    else if(playerSelection === "scissors"){
        if(computerSelection === "paper"){
            console.log("You win! Scissors beat paper.");
            return "User";
        }
        else if(computerSelection === "rock"){
            console.log("You lose! Rock beats scissors.");
            return "Computer"
        }
    }
    // invalid user input!
    else {
        console.log("Invalid choice! Choose rock, paper, or scissors!");
        return "invalid";
    }
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

game();