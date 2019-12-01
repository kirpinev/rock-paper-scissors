let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.querySelector(".user-score");
const computerScoreSpan = document.querySelector(".computer-score");

const scoreBoard = document.querySelector(".score");
const choices = document.querySelector(".choices");

const result = document.querySelector(".result__title");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * choices.length);

  return choices[randomNumber];
}

function win(user, computer) {
  userScore++;
  userScoreSpan.textContent = `${userScore}`;
  //computerScoreSpan.textContent = `${computerScore}`;

  const smallUserWord = "user".fontsize(3).sup();
  const smallComputerWord = "comp".fontsize(3).sup();

  result.innerHTML = `${user}${smallUserWord} beats ${computer}${smallComputerWord}. You win!`;
  document
    .querySelector(`.${user}`)
    .parentElement.classList.remove("choices__item_type_default");
  document
    .querySelector(`.${user}`)
    .parentElement.classList.add("choices__item_type_win");

  setTimeout(() => {
    document
      .querySelector(`.${user}`)
      .parentElement.classList.remove("choices__item_type_win");
    document
      .querySelector(`.${user}`)
      .parentElement.classList.add("choices__item_type_default");
  }, 300);
}

function lose(user, computer) {
  computerScore++;
  computerScoreSpan.textContent = `${computerScore}`;

  const smallUserWord = "user".fontsize(3).sup();
  const smallComputerWord = "comp".fontsize(3).sup();

  result.innerHTML = `${user}${smallUserWord} loses to ${computer}${smallComputerWord}. You lost.`;

  document
    .querySelector(`.${user}`)
    .parentElement.classList.remove("choices__item_type_default");
  document
    .querySelector(`.${user}`)
    .parentElement.classList.add("choices__item_type_lose");

  setTimeout(() => {
    document
      .querySelector(`.${user}`)
      .parentElement.classList.remove("choices__item_type_lose");
    document
      .querySelector(`.${user}`)
      .parentElement.classList.add("choices__item_type_default");
  }, 300);
}

function draw(user, computer) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallComputerWord = "comp".fontsize(3).sup();
  result.innerHTML = `${user}${smallUserWord} equals to ${computer}${smallComputerWord}. It's a draw.`;

  document
    .querySelector(`.${user}`)
    .parentElement.classList.remove("choices__item_type_default");
  document
    .querySelector(`.${user}`)
    .parentElement.classList.add("choices__item_type_draw");

  setTimeout(() => {
    document
      .querySelector(`.${user}`)
      .parentElement.classList.remove("choices__item_type_draw");
    document
      .querySelector(`.${user}`)
      .parentElement.classList.add("choices__item_type_default");
  }, 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (`${userChoice}${computerChoice}`) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
  }
}

choices.addEventListener("click", event => {
  if (event.target.classList.contains("rock")) {
    game("rock");
  } else if (event.target.classList.contains("paper")) {
    game("paper");
  } else if (event.target.classList.contains("scissors")) {
    game("scissors");
  }
});
