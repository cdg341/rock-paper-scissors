// Computer makes random choice

function computerPlay(pcChoice) {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Compares player choice vs computers choice

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock - Paper - Scissors?").toLowerCase();
    computerSelection = computerPlay();

    if (playerSelection === "rock" && computerSelection === "rock") {
        return ("Rock can't smash rock, It's a tie!");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return ("Rock smashes scissors! You won, Congratulations!");
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return ("You lose, Paper wraps Rock!");
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        return ("Paper covers rock, you won!");
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return ("Sorry you lost, scissors cuts paper!");
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        return ("It's a tie!");
    }

    if (playerSelection === "scissors" && computerSelection === "rock") {
        return ("Rock smashes scissors, you lost!");
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return ("It's a tie!");
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return ("Scissors cuts through paper, you won!");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
}

game();
