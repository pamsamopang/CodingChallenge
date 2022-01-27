import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares: any[] = Array(9).fill(null)
  winner:  string = ''
  xIsNext: boolean = false
  inProgress: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.newGame()
  }

  newGame() {
    this.inProgress = true
    this.xIsNext = true
    this.squares = this.squares.fill(null)
  }

  get player() {
    return this.xIsNext ? 'X' : 'O'
  }

  makeMove(i:number) {
    if(!this.squares[i] && this.inProgress) {
      this.squares.splice(i, 1, this.player)
      this.xIsNext = !this.xIsNext
    }
    this.winner = this.checkForWinner()
  }

  checkForWinner(): any {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    const num = lines.length

    for(let i = 0; i < num; i++) {
      const [a, b, c] = lines[i]
      const sqA = this.squares[a]
      const sqB = this.squares[b]
      const sqC = this.squares[c]

      if(sqA && sqA === sqB && sqA === sqC) {
        this.inProgress = false
        return sqA
      }
      return ''
    }
  }
}
