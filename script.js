let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("playerScore");
const computerScore_span = document.getElementById("computerScore");
const outcome = document.getElementById("outcome");
const pcChose = document.getElementById("chose");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const restart = document.getElementById("reset");
const imgDiv = document.querySelectorAll(".choice");

rock.addEventListener("click", rockChoice);
paper.addEventListener("click", paperChoice);
scissors.addEventListener("click", scissorsChoice);
restart.addEventListener("click", reset);

function rockChoice() {
  game("rock");
}
function scissorsChoice() {
  game("scissors");
}
function paperChoice() {
  game("paper");
}

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

  pcChose.textContent = "Computer chose " + computerChoice;
  pcChose.style.fontSize = "18px";

  winner();
  disable();
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
  } else if (computerScore == 5) {
    outcome.textContent = "You lost, better luck next time";
  }
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  outcome.textContent = "Who Will Get To 5 Wins First?";
  chose.textContent = "";
  playerScore_span.textContent = 0;
  computerScore_span.textContent = 0;
  rock.addEventListener("click", rockChoice);
  paper.addEventListener("click", paperChoice);
  scissors.addEventListener("click", scissorsChoice);
  rock.setAttribute("style", "opacity: 100%");
  paper.setAttribute("style", "opacity: 100%");
  scissors.setAttribute("style", "opacity: 100%");
  imgDiv.forEach(function (img) {
    img.setAttribute("style", "border: 4px solid white; opacity: 100%");
    img.classList.add("choice-hover");
  });
}

function computerPlay(pcChoice) {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function disable() {
  if (playerScore == 5 || computerScore == 5) {
    rock.removeEventListener("click", rockChoice);
    paper.removeEventListener("click", paperChoice);
    scissors.removeEventListener("click", scissorsChoice);
    rock.setAttribute("style", "opacity: 60%");
    paper.setAttribute("style", "opacity: 60%");
    scissors.setAttribute("style", "opacity: 60%");
    imgDiv.forEach(function (img) {
      img.setAttribute("style", "border: 4px solid grey; opacity: 60%");
      img.classList.remove("choice-hover");
    });
  }
}
