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
    if (playerSelection == "rock" && computerPlay == "scissors"){
        console.log("The Player won!");
        playerScore++;
    }  else if(playerSelection == "rock" && computerPlay == "paper"){
        console.log("The computer won!");
        computerScore++;
    } else if(playerSelection == "paper" && computerPlay == "scissors"){
        console.log("The Computer won!");
        computerScore++;
    } else if(playerSelection == "paper" && computerPlay == "rock"){
        console.log("The player won!");
        playerScore++;
    } else if(playerSelection == "scissors" && computerPlay == "rock"){
        console.log("The computer won!");
        computerScore++;
    } else if(playerSelection == "scissors" && computerPlay == "paper"){
        console.log("The player won!");
        playerScore++;
    } else {
        console.log("This game is a draw!");
        draw++;
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
        console.log("The whole game is a draw!");
    }
     //function does not return a value, instead returns undefined
}


console.log(game(playRound));