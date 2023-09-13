const header = document.querySelector("#header");
const scoreTally = document.querySelector(".scoreTally");
const result = document.querySelector(".results");
const computer = document.querySelector(".computer");
const choiceRock = document.querySelector(".rock");
const choicePaper = document.querySelector(".paper");
const choiceScissors = document.querySelector(".scissors");


const options = ['rock', 'paper', 'scissors']

let playerScore = parseInt(0);
let computerScore = 0;
let playerOptions = "";

function updateResult(){
    scoreTally.textContent = `Player score: ${playerScore} - Computer score: ${computerScore}.`
}

function getComputerChoice(){
    let computerSelection = Math.floor(Math.random() * options.length);
    computer.textContent = `Computer chose: ${options[computerSelection]}`;
    return options[computerSelection];
}


// get players choice
choiceRock.addEventListener("click", () => {
    newRound("rock", getComputerChoice());
})

choicePaper.addEventListener("click", () => {
    newRound("paper", getComputerChoice());
})

choiceScissors.addEventListener("click", () => {
    newRound("scissors", getComputerChoice());
})


// functions to update results and score++
function resultsTie(){
    result.textContent = `It's a tie!`;
}

function resultsPlayerWin(){
    result.textContent = `You won!`;
    playerScore++;
}

function resultsPlayerLose(){
    result.textContent = `You lost!`;
    computerScore++;
}


function newRound(playerChoice, computerChoice){
        if (playerChoice === computerChoice){
            resultsTie();
        }
        else if (playerChoice === "rock" && computerChoice === "scissors" ||
                playerChoice === "paper" && computerChoice === "rock" ||
                playerChoice === "scissors" && computerChoice === "paper"){
            resultsPlayerWin();
                }
        else if (playerChoice === "rock" && computerChoice === "paper" ||
                playerChoice === "paper" && computerChoice === "scissors" ||
                playerChoice === "scissors" && computerChoice === "rock"){
            resultsPlayerLose();
                }

        updateResult();
        gameLoop();
}

function gameLoop(){
    if (playerScore === 5){
        scoreTally.textContent = `You win!! ${playerScore} - ${computerScore}.`
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5){
        scoreTally.textContent = `You lose!! ${playerScore} - ${computerScore}.`
        playerScore = 0;
        computerScore = 0;
    }
}

