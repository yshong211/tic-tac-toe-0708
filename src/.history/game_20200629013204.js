import React from 'react'

class Game extends React.Component {
    constructor(props) { // constructs with starting values set
      super(props); // constructor starts with super(), able to use functions in Board
                    // call super when defining the constructor of a subclass
      this.state = {
        history: [ // [{squares:[Array(9).fill(null)]}]
          {
            squares: Array(9).fill(null)
          }
        ],
        stepNumber: 0, // count var
        xIsNext: Math.random() < 0.5 // Random for which player goes first (50% each)
      };
    }
    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);  
      const current = history[history.length - 1]; // current history
      const squares = current.squares.slice(); // copying array using .slice() because of immutability
      if (calculateWinner(squares) || squares[i]) { // ends the game
        return;
      } 
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{ // concatenates {squares: array(9)} inside history array
          squares: squares
        }]),
        stepNumber: history.length, 
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
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
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