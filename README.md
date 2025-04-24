# Etch-a-Sketch


Example code for using a button click to trigger a function 

const paperButton = document.querySelector("#paperButton");
paperButton.addEventListener("click", () => {
  if (gameOver) resetGame();
  let humanChoice = "paper";
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});