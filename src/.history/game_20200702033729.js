import React from 'react';
import {Board} from './board.js';


/*
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

*/
export class Game extends React.Component {
    constructor(props) { 
      super(props); 
      this.state = {
        board: Array(9).fill(null),
        history: [], // track the last index
        stepNumber: 0, // count var
        xIsNext: true // Random for which player goes first (50% each)
      };
    }
    hor(squares, row_length){
      let count = 0;
      let match = 0;
      for(let i = 0; i < squares.length; i++){
        if(squares[i]){
          match++;
        }
        count++;
        
        if(count === row_length){
        if ((count === match)){
          
          return true;
        }
        count = 0;
        match = 0;
      }


      }
    }
    vert(squares, row_length){
      let count = 0;
      let match = 0;
      for(let i = 0; i < row_length; i++){
        for(let j = i; j < row_length; j+=row_length){
        if(squares[j]){
          match++;
        }
        }
        if(match === row_length){
          if ((count === match)){
            return true;
          } 
          count = 0;
          match = 0;

      }
    }}

    
    cross(squares, row_length){

    }
    calculateWinner(squares){
      const row_length = Math.sqrt(squares.length)
      if(this.hor(squares,row_length)){
        return true;
      }
      /*
      if(this.hor(squares,row_length) || this.vert(squares,row_length) || this.cross(squares,row_length)){
        return true;
      }
      */
    }
    handleClick(i) {
      const hist = this.state.history;
      const squares = this.state.board;
      if (this.calculateWinner(squares) || squares[i]) { // ends the game
        return;
      } 
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      hist.push(i);
      this.setState({
        board: squares,
        history: hist,
        stepNumber: this.state.history.length, 
        xIsNext: !this.state.xIsNext // changes turn
      });
    }
    
    jumpTo(history, board, step) {
      for (let i = history.length-1; i >= step; i--){ 
        const n = history.pop();
        board[n] = null;
      }
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      });
      
    }
    
    render() {
      const board = this.state.board;
      const history = this.state.history;
      const winner = this.calculateWinner(board);
      const moves = history.map((step, move) => { 
        const desc = move ? 
          'Go to move #' + move :
          'Go to game start';
          
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(history, board, move)}>{desc}</button>
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
              squares={board}
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


