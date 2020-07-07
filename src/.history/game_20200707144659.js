import React from 'react';
import Board from './board';


export default class Game extends React.Component {
    constructor(props) { 
      super(props); 
      this.state = {
        board: [], //history:{square: Arr}
        history: [], // track the last index
        stepNumber: 0, // count var
        xIsNext: true // Random for which player goes first (50% each)
      };
    }
    
    hor(squares, row_length){
      let index = 0;
      let count = 0;
      let x = 0;
      let o = 0;
      for(let i = 0; i < row_length; i++){
        for(let j = 0; j < row_length; j++){
          if(squares[index]==='X'){
            x++;
          }
          if(squares[index]==='O'){
            o++
          }
          count++;
          index++;
        }
        if(o === count){
          return 'O';
        }
        if(x === count){
          return 'X'
        }
        count = 0;
        x = 0;
        o = 0;
      }
    }
    
    vert(squares, row_length){
      let count = 0;
      let x = 0;
      let o = 0;
      for(let i = 0; i < row_length; i++){
        for(let j = i; j < row_length**2; j+=4){
          if(squares[j]==='X'){
            x++;
          }
          if(squares[j]==='O'){
            o++
          }
          count++;
        }
        
        if(o === count){
          return 'O';
        }
        if(x === count){
          return 'X';
        }
        count = 0;
        x = 0;
        o = 0;
      }
    }
/*
    cross(squares, row_length){

    }
    
    calculateWinner(squares){
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
      
      return null;}
      
     */

    calculateWinner(squares, rows){
      if(this.hor(squares, rows) === 'O' || this.hor(squares, rows) === 'X'){
        return this.hor(squares, rows);
      }
      
      else if(this.vert(squares, rows) === 'O' || this.vert(squares, rows) === 'X'){
        return this.vert(squares, rows);
      }

    }
    handleClick(i) {
      const hist = this.state.history;
      const squares = this.state.board;
      if (this.calculateWinner(squares, this.props.rows) || squares[i]) { // ends the game
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
        board[history.pop()] = null;
      }
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      });
    }
    render() {
      const board = this.state.board;
      const history = this.state.history;

      const winner = this.calculateWinner(board, rows);
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
              rows = {this.props.rows}
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


