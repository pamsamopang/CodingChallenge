import './App.css';
import React, { Component } from 'react'

class App extends Component {

  constructor() {
    super()
    this.state = {
      inProgress: true,
      winner: null,
      board : ['', '', '', '', '', '', '', '', ''],
      currentTurn: 'X',
      countMoves: 0
    }
  }

  makeMove(i) {
    let currentTurn = this.state.currentTurn
    let board = this.state.board
    if (this.state.inProgress && !board[i]) {
      board[i] = currentTurn
      currentTurn = (currentTurn === 'X') ? 'O' : 'X'
      this.checkForWinner()
      this.setState({
        board: board,
        currentTurn: currentTurn
      })
    }
  }

  checkForWinner() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    winningCombinations.forEach((wc) => {
      const [a, b, c] = wc
      let board = this.state.board
      const sqA = board[a]
      const sqB = board[b]
      const sqC = board[c]

      if(sqA && sqA === sqB && sqA === sqC) {
        this.setState({
          inProgress: false,
          winner: sqA
        })
      }
    })

    if(this.state.countMoves === this.state.board.length) {
      this.setState({
        inProgress: false
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React Tic Tac Toe</h1>
        <div className="game-view">
          <div className="game-view-info">
            <h2>
              {(this.state.winner && !this.state.inProgress) ? 
                `${this.state.winner}'s wins!` : 
                `It's ${this.state.currentTurn}'s turn!`}
            </h2>
          </div>
          <div className="game-board">
            {this.state.board.map((square, i) => {
              return (
                <div 
                  onClick={() => this.makeMove(i)} 
                  className="game-board-square">{square}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
