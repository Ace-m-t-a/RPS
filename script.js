let computerScore = 0;
let playerScore = 0;
let draw = 0;

function computerPlay(){
    let selections = ["rock", "paper", "scissors"];
    let randWord = selections[Math.floor(Math.random() * selections.length)];
    return randWord
}


function playerSelection(){
    user = prompt("Choose between rock, paper and scissors: ");
    let newUser = user.toLowerCase();
    return newUser;
}

function playRound(playerSelection, computerPlay){
    if (computerPlay === playerSelection){
        console.log("This game is a draw!");
        draw++;
    } else if (computerPlay === "rock" && playerSelection !== "paper"){
        console.log("The computer won this round!");
        computerScore++;
    } else if (computerPlay === "rock" && playerSelection === "paper"){
        console.log("Player won this round!");
        playerScore++;
    } else if (playerSelection === "rock" && computerPlay !== "paper"){
        console.log("The player won this round!");
        playerScore++;
    } else if (playerSelection === "rock" && computerPlay === "paper"){
        console.log("The computer won this round!");
        computerScore++;
    }
}

function game(playRound){
    for(let i = 0; i < 5; i++){
        playRound(playerSelection(), computerPlay());
    }
    if (computerScore > playerScore){
        console.log("The computer won the whole game!");
    } else if (playerScore > computerScore){
        console.log("The player won the whole game!");
    } else {
        console.log("The game is a draw!");
    }
}


console.log(game(playRound));