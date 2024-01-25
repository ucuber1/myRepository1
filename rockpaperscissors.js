function getRandomMove() {
  const randomNumber = Math.random();
  let randomMove = "";
  if (0 <= randomNumber && randomNumber < 1 / 3) {
    randomMove = "rock";
  }
  if (1 / 3 <= randomNumber && randomNumber < 2 / 3) {
    randomMove = "paper";
  }
  if (2 / 3 <= randomNumber && randomNumber <= 1) {
    randomMove = "scissors";
  }
  return randomMove;
}

function rockPaperScissors(userMove) {
  const computerMove = getRandomMove();
  let result = "";
  if (userMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    }
    if (computerMove === "paper") {
      result = "You lose.";
    }
    if (computerMove === "scissors") {
      result = "You win.";
    }
  }
  if (userMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    }
    if (computerMove === "paper") {
      result = "Tie.";
    }
    if (computerMove === "scissors") {
      result = "You lose.";
    }
  }
  if (userMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    }
    if (computerMove === "paper") {
      result = "You win.";
    }
    if (computerMove === "scissors") {
      result = "Tie.";
    }
  }

  if (result === "You win.") {
    score.wins++;
  }
  if (result === "You lose.") {
    score.losses++;
  }
  if (result === "Tie.") {
    score.ties++;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-moves").innerHTML = `You
  <img class="move-icon" src="../images/${userMove}-emoji.png" />
  <img class="move-icon" src="../images/${computerMove}-emoji.png" />
  Computer`;
  updateScoreElement();
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");

  updateScoreElement();
}

const defaultScore = {
  wins: 0,
  losses: 0,
  ties: 0,
};

const score = JSON.parse(localStorage.getItem("score")) || defaultScore;

updateScoreElement();
