// 0 = rock, 1 = paper, 3 = scissors
// getComputerChoice to randomly choose rock paper or scissors
// prompt for players choice. convert to 0, 1 or 2
// if statements to determine winner and increase score
// while loop to loop through 5 plays then display winner

let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerSelection = Math.floor(Math.random() * 3);
    return computerSelection;
}


function getPlayerChoice(){
    let playerSelection = prompt("Enter either Rock, Paper or Scissors!").toLowerCase();
    if (playerSelection == "rock"){
        playerSelection = 0;
    }
    else if (playerSelection == "paper"){
        playerSelection = 1;
    }
    else {
        playerSelection = 2;
    }
    return playerSelection;
}


function newRound(playerSelection, computerSelection){
    console.log("New Round!")
    
    if (playerSelection == 0){
        console.log("Player chose Rock!")
        if (computerSelection == 0){
            console.log("Computer chose Rock too. It's a tie!")
        }
        else if (computerSelection == 1){
            console.log("Computer chose Paper. You lose!")
            computerScore++;
        }
        else {
            console.log("Computer chose Scissors. You win!")
            playerScore++;
        }
    }
    else if (playerSelection == 1){
        console.log("Player chose Paper!");
        if (computerSelection == 0){
            console.log("Computer chose Rock. You win!")
            playerScore++
        }
        else if (computerSelection == 1){
            console.log("Computer chose Paper too. It's a tie!")
        }
        else {
            console.log("Computer chose Scissors. You lose!")
            computerScore++;
        }
    }
    else if (playerSelection == 2){
        console.log("Player chose Scissors!")
        if (computerSelection == 0){
            console.log("Computer chose Rock. You lose!")
            computerScore++
        }
        else if (computerSelection == 1){
            console.log("Computer chose Paper. You win!")
            playerScore++;
        }
        else {
            console.log("Computer chose Scissors too. It's a tie!")
        }
    }
    console.log(`Player score is ${playerScore}. Computer score is ${computerScore}.`);
    }


function game(){
    console.log("Welcome to Rock Paper Scissors. First to 5, wins!")
    while (playerScore != 5 && computerScore != 5){
        let computer = getComputerChoice()
        let player = getPlayerChoice()
        newRound(player, computer);
    }
    if (playerScore == 5){
        console.log(`You win! The score was ${playerScore}-${computerScore}.`)
    }
    else{
        console.log(`You lose! The score was ${playerScore}-${computerScore}.`)
    }

}


game();