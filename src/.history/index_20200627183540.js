import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// renders <button>
class Square extends React.Component {
    constructor(props) {
        super(props); // Always used when having constructor. 
                      // you need to always call super when defining the constructor of a subclass in js.
        this.state = {
            value: null,
        };
    }
    render() {
      return (
        <button className="square" onClick = {() => {alert('click');}}> 

          {this.state.value}
        </button>
      );
    }
  }
  // renders 9 squares
  class Board extends React.Component {
     
    renderSquare(i) {
      // this return goes to component Square {this.props.value}
      return <Square value={i} />; 
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  // renders the game display
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
  