class Game {
  constructor() {
    (this.rows = 9), (this.colums = 9), (this.mines = 10), (this.board = []);
  }

  generateBoard() {
    for (let i = 0; i < this.rows; i++) {
      this.board.push([]);

      for (let j = 0; j < this.colums; j++) {
        this.board[i].push(0);
      }
    }
  }

  generateMinesCoord() {
    this.minesCoord = [];

    while (this.minesCoord.length < this.mines) {
      const x = this.generateRandomNumber(0, this.rows);
      const y = this.generateRandomNumber(0, this.colums);

      // TA PASSANDO BOMBA IGUAL - RESOLVA!
      if (!this.minesCoord.includes([x, y])) {
        this.minesCoord.push([x, y]);
      }
    }
  }

  generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  positioningMines() {
    for (let i = 0; i < this.minesCoord.length; i++) {
      this.board[this.minesCoord[i][0]][this.minesCoord[i][1]] = "B";
    }
  }
}
