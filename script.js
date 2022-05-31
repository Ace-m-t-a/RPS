let computerScore = 0;
let playerScore = 0;
let draw = 0;
let count = 0;
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const score = document.getElementById('score');
const button = document.getElementsByClassName('button');

const rockBtn = document.getElementById('rock').addEventListener('click', () => {
    playRound("rock", computerPlay());
});
const paperBtn = document.getElementById('paper').addEventListener('click', () => {
    playRound("paper", computerPlay());
});
const scissorsBtn = document.getElementById('scissors').addEventListener('click', () => {
    playRound("scissors", computerPlay());
});


function computerPlay(){
    let selections = ["rock", "paper", "scissors"];
    let randWord = selections[Math.floor(Math.random() * selections.length)];
    return randWord;
}

function playRound(playerSelection, computerPlay){
    if (playerSelection == "rock" && computerPlay == "scissors"){
        player.textContent = 'The player has selected: Rock';
        computer.textContent = 'The computer has selected: Scissors';
        score.textContent = 'The winner of this round is: Player';
        playerScore++;
        count++;
    }  else if(playerSelection == "rock" && computerPlay == "paper"){
        player.textContent = 'The player has selected: Rock';
        computer.textContent = 'The computer has selected: Paper';
        score.textContent = 'The winner of this round is: Computer';
        computerScore++;
        count++;
    } else if(playerSelection == "paper" && computerPlay == "scissors"){
        player.textContent = 'The player has selected: Paper';
        computer.textContent = 'The computer has selected: Scissors';
        score.textContent = 'The winner of this round is: Computer';
        computerScore++;
        count++;
    } else if(playerSelection == "paper" && computerPlay == "rock"){
        player.textContent = 'The player has selected: Paper';
        computer.textContent = 'The computer has selected: Rock';
        score.textContent = 'The winner of this round is: Player';
        playerScore++;
        count++;
    } else if(playerSelection == "scissors" && computerPlay == "rock"){
        player.textContent = 'The player has selected: Scissors';
        computer.textContent = 'The computer has selected: Rock';
        score.textContent = 'The winner of this round is: Computer';
        computerScore++;
        count++
    } else if(playerSelection == "scissors" && computerPlay == "paper"){
        player.textContent = 'The player has selected: Scissors';
        computer.textContent = 'The computer has selected: Paper';
        score.textContent = 'The winner of this round is: Player';
        playerScore++;
        count++
    } else {
        player.textContent = 'The player has selected: The same as computer!';
        computer.textContent = 'The computer has selected: The same as player!';
        score.textContent = 'The winner of this round is: Draw';
        draw++;
        count++
    }
    if (count > 4){
        document.body.textContent = "";
        if (computerScore > playerScore){
            alert("The computer won the whole game!");
        } else if (playerScore > computerScore){
            alert("The player won the whole game!");
        } else {
            alert("The whole game is a draw!");
        }
        //clear the whole document and print the winner to 
        //the screen
    }
    
}
