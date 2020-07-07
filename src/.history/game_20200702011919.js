import React from 'react';
import {Board} from './board.js';



function calculateWinner(squares) {
  const lines = [ // Contains all the possible ways of winning 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]; 
    // checks if the squares contains winning index
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
  }}
  
  return null;
}


export class Game extends React.Component {
    constructor(props) { 
      super(props); 
      this.state = {
        /*
        //history: [ // [{squares:[Array(9).fill(null)]}]{
            squares: Array(9).fill(null)
          }
        ],
        */
        history: [], // track the last index
        stepNumber: 0, // count var
        xIsNext: Math.random() < 0.5 // Random for which player goes first (50% each)
      };
    }


    handleClick(i) {
      //const history = this.state.history.slice(0, this.state.stepNumber + 1); // needs to be fixed
      const squares = this.state.history;
      //const current = this.state.history[-1]; // current history
      //const squares = current.squares.slice(); // copying array using .slice() because of immutability
      if (calculateWinner(squares) || squares[i]) { // ends the game
        return;
      } 
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: this.state.history.push(squares[i]),
        stepNumber: this.state.history.length, 
        xIsNext: !this.state.xIsNext // changes turn
      });
    }
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0 // changes turn
      });
    }
    render() {
      const history = this.state.history;
      const current = history[-1];
      const winner = calculateWinner(history);
      /*
      const moves = history.map((step, move) => { // var move is the key of the object inside array
        const desc = move ? // creates the text inside each button for tracking
          'Go to move #' + move :
          'Go to game start';
          
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );

      });
      let status;
      winner ? status = 'Winner: ' + winner : 
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

      return (
        <div className="game">
          <div className="game-board">
            <Board // exports the values of attr to Board component
              squares={current.squares}
              onClick={i => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }


