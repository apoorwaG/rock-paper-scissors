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


function disalbeButtons() {
    // disable buttons as the game is over.
    choiceButtons = document.querySelectorAll("button");
    choiceButtons.forEach((button) => {
        button.disabled = true;
    });
}

function addResetButton() {
    // add a reset game button with an event listener to reset game state
    const resultsSection = document.querySelector('.results');
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.setAttribute('style', 'border: 3px solid black; border-radius: 2px; justify-content: center;');
    resetButton.classList.add('reset');
    resetButton.addEventListener('click', resetGame);
    resultsSection.appendChild(resetButton);
}

function resetGame() {

    // reset the round number
    const roundInfo = document.querySelector('.roundNum');
    roundInfo.textContent = 1;

    // reset the scores
    const playerScore = document.querySelector('.playerScore');
    playerScore.textContent = 0;
    const computerScore = document.querySelector(".computerScore");
    computerScore.textContent = 0;


    // remove the round winner info, game winner info, and the reset button
    const resultsSection = document.querySelector('.results');
    resultsSection.removeChild(document.querySelector('p.roundResult'));
    resultsSection.removeChild(document.querySelector('p.gameWinner'));
    resultsSection.removeChild(document.querySelector('button.reset'));

    choiceButtons = document.querySelectorAll("button");
        choiceButtons.forEach((button) => {
            button.disabled = false;
        });

}

// function updates the round number and displays winner
function getWinner(){
    const roundNum = document.querySelector('.roundNum');
    let roundNumInt = +roundNum.textContent + 1;

    const playerScore = +document.querySelector('.playerScore').textContent;
    const computerScore = +document.querySelector(".computerScore").textContent;
    
    if(playerScore === 5 || computerScore === 5){
        const resultsSection = document.querySelector(".results");
        const para = document.createElement('p');
        para.classList.add('gameWinner');
        if(playerScore === 5){
            para.textContent = "Player wins the game! Great Job!";
        }
        else {
            para.textContent = "Computer wins the game! Better luck next time!";
        }

        para.setAttribute('style', 'font-size: 30px');
        resultsSection.appendChild(para);

        // game is over. disable buttons/choice buttons
        disalbeButtons();

        // add a reset game button with an event listener:
        addResetButton();

    } 

    roundNum.textContent = roundNumInt;
    
}


function displayResults(result) {
    // results node. needed to add a the score node in case it doesn't exist
    const results = document.querySelector(".results");

    let resultPara = document.querySelector(".roundResult");

    // variable false initially. assume roundResult node exists
    let newPara = false;
    if(!resultPara){
        newPara = true;
        resultPara = document.createElement('p');
        resultPara.classList.add('roundResult');
    }

    const playerScore = document.querySelector(".playerScore");
    const computerScore = document.querySelector(".computerScore");
    // in case of a tie, don't update just the text
    if(result === 'tie') resultPara.textContent = "Tied this round.";

    // if user wins the round, update results: scoreboard and text
    else if(result === 'User'){
        resultPara.textContent = "Player wins this round.";
        playerScore.textContent = Number(playerScore.textContent) + 1;
    }

    // if computer wins the round, update results: scoreboard and text
    else {
        resultPara.textContent = "Computer wins this round.";
        computerScore.textContent = Number(computerScore.textContent) + 1;
    }

    // if roundResult doesn't exist, we add it as a child to the results parent node
    if(newPara) results.appendChild(resultPara);

    // update the round number and possibly display the winner (first to reach 5 wins)
    getWinner();
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

const buttons = document.querySelectorAll(".choice");
buttons.forEach((button) => {

    button.addEventListener('click', playRound);

});