// Computer makes random choice

function computerPlay(pcChoice) {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}


// Compares player choice vs computers choice

function playRound(playerSelection, computerSelection) {
    let result;

    if (playerSelection === "rock" && computerSelection === "rock") {
        result = ("Rock can't smash rock, It's a tie!");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = ("Rock smashes scissors! You won, Congratulations!");
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        result = ("You lose, Paper wraps Rock!");
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        result = ("Paper covers rock, you won!");
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = ("Sorry you lost, scissors cuts paper!");
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        result = ("It's a tie!");
    }

    if (playerSelection === "scissors" && computerSelection === "rock") {
        result = ("Rock smashes scissors, you lost!");
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        result = ("It's a tie!");
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = ("Scissors cuts through paper, you won!");
    }

    return result;
}

const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
const computerSelection = computerPlay();


console.log(playRound(playerSelection, computerSelection));



console.log("The computer chose " + computerSelection);


