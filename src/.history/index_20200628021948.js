import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Square(props) {
  // gets value and onClick from renderSquare
  return (
    <button className = "square" onClick = {props.onClick}>
      {props.value}
    </button>
    );
}
 
  class Board extends React.Component { // renders 9 squares
    renderSquare(i) {
      // value and onclick transfers to component Square 
      return(
        <Square 
          // this.props.attr gets the val from <Board attr= >
          value={this.props.squares[i]} // got val from {current.squares}
          onClick={() => this.props.onClick(i)} // got val from {i => this.handleClick(i)}
        />
      );
    }
    create_row(start) {
      return (
        <div className="board-row"> 
          {this.renderSquare(start)}
          {this.renderSquare(start+1)}
          {this.renderSquare(start+2)}
        </div>)
    }
    render() {
      return (
        <div>
          {this.create_row(0)} {/* creates the first row */}
          {this.create_row(3)} {/* creates the second row */}
          {this.create_row(6)} {/* creates the third row */}
        </div>
      );
    }
  }
  // renders the game display
  class Game extends React.Component {
    constructor(props) { // constructs with null vals
      super(props); // de
      this.state = {
        history: [
          {
            squares: Array(9).fill(null)
          }
        ],
        stepNumber: 0, // count var
        xIsNext: Math.random() < 0.5 // made random for which player goes first (50% each)
      };
    }
    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);  
      const current = history[history.length - 1]; // current history
      const squares = current.squares.slice(); // copying array using .slice() because of immutability
      if (calculateWinner(squares) || squares[i]) return; // ends the game
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{ // concatenates {squares: array(9)} inside history array
          squares: squares
        }]),
        stepNumber: history.length, 
        xIsNext: !this.state.xIsNext // changes to opponent
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
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
      
      const moves = history.map((step, move) => {
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
  
  // ========================================
  
  // renders the game component
  ReactDOM.render(
    <Game />, // goes inside the second parameter;
    document.getElementById('root') // if attr = 'root', returns <div id = "root"></div>

  );

  function calculateWinner(squares) {
    const lines = [ // Contains all the possible way of winning 
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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
    }
    
    return null;
  }
