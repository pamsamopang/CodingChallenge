class Game {
  constructor() {
    this.inProgress = true
    this.winner = null      // 'O' or 'X' player
    this.currentTurn = 'O'  // initial 1st player
    this.movesMade = 0      // initial move counter
    this.squares = new Array(9).fill().map(s => new Square())
  }
}

Game.O = 'O'
Game.X = 'X'