let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("playerScore");
const computerScore_span = document.getElementById("computerScore");
const outcome = document.getElementById("outcome");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function game(playerChoice) {
  const computerChoice = computerPlay();
  if (playerChoice === "rock" && computerChoice === "rock") {
    outcome.textContent = "It was a draw";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    outcome.textContent = "Rock beats scissors - you won!";
    win();
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    outcome.textContent = "Paper wraps rock - you lose";
    lost();
  }

  if (playerChoice === "paper" && computerChoice === "paper") {
    outcome.textContent = "It was a draw";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    outcome.textContent = "Scissors cuts paper - you lost";
    lost();
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    outcome.textContent = "Paper wraps rock - you win!";
    win();
  }

  if (playerChoice === "scissors" && computerChoice === "scissors") {
    outcome.textContent = "It was a draw";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    outcome.textContent = "Scissors cuts paper - you won!";
    win();
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    outcome.textContent = "Rock smashes scissors - you lose";
    lost();
  }

  chose.textContent = "Computer chose " + computerChoice;
  chose.style.fontSize = "18px";

  winner();
}

function win() {
  playerScore++;
  playerScore_span.textContent = playerScore;
}

function lost() {
  computerScore++;
  computerScore_span.textContent = computerScore;
}

function winner() {
  if (playerScore == 5) {
    outcome.textContent = "Congratulations you won the game!!";
    reset();
  } else if (computerScore == 5) {
    outcome.textContent = "You lost, better luck next time";
    reset();
  }
}

function reset() {
  playerScore = 0;
  computerScore = 0;
}

function computerPlay(pcChoice) {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function clickEvent() {
  rock.addEventListener("click", () => {
    game("rock");
  });

  paper.addEventListener("click", () => {
    game("paper");
  });

  scissors.addEventListener("click", () => {
    game("scissors");
  });
}

clickEvent();
