let playerScore = 0;
let pcScore = 0;

function computerPlay(pcChoice) {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    computerSelection = computerPlay();

    if (playerSelection === "rock" && computerSelection === "rock") {
        return ("Rock can't smash rock, It's a tie!");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return ("Rock smashes scissors! You won, Congratulations!");
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        pcScore++;
        return ("You lose, Paper wraps Rock!");
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return ("Paper covers rock, you won!");
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        pcScore++;
        return ("Sorry you lost, scissors cuts paper!");
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        return ("It's a tie!");
    }

    if (playerSelection === "scissors" && computerSelection === "rock") {
        pcScore++;
        return ("Rock smashes scissors, you lost!");
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return ("It's a tie!");
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return ("Scissors cuts through paper, you won!");
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
}

function score() {
    if (playerScore > pcScore) {
        console.log("Congratulations you won the game!");
    }
    else {
        console.log("Oh snap you lost to the computer :(");
    }
    console.log("You're score was " + playerScore + " and the computer's score was " + pcScore);
}

game();
score();