console.log("Salve");
const game = new Game();

const startBtn = document.getElementById("start");

startBtn.addEventListener("click", () => {
  startBtn.classList.toggle("show");
  startBtn.classList.toggle("hidden");
  game.generateBoard();
  console.log(game.board);
  game.generateMinesCoord();
  console.log(game.minesCoord);
  game.positioningMines();
  console.log(game.board);
});
