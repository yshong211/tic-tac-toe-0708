import React from 'react';
import Board from '../board/board';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      erase: '',
      board: [],
      history: [], // track the last index
      stepNumber: 0, // count var
      xIsNext: true,
      track: false,
    };
  }

  /*
  check(o, x, row) {
    if (o === row) {
      return "O";
    }
    if (x === row) {
      return "X";
    }
  }
*/
  hor(squares, row_length, count, x, o) {
    let index = 0;
    for (let i = 0; i < this.props.board_rows; i++) {
      for (let j = 0; j < this.props.board_rows; j++) {
        if (squares[index] === 'X') {
          x++;
          o = 0;
          count++;
        } else if (squares[index] === 'O') {
          o++;
          x = 0;
          count++;
        } else {
          count = 0;
        }
        index++;
        if (o >= row_length && count >= row_length) {
          return 'O';
        }
        if (x >= row_length && count >= row_length) {
          return 'X';
        }
      }
      x = 0;
      o = 0;
    }
  }

  vert(squares, row_length, count, x, o) {
    for (let i = 0; i < this.props.board_rows; i++) {
      for (
        let j = i;
        j < this.props.board_rows ** 2;
        j += this.props.board_rows
      ) {
        if (squares[j] === 'X') {
          x++;
          o = 0;
          count++;
        } else if (squares[j] === 'O') {
          o++;
          x = 0;
          count++;
        } else {
          count = 0;
        }
        if (o >= row_length && count >= row_length) {
          return 'O';
        }
        if (x >= row_length && count >= row_length) {
          return 'X';
        }
      }
      x = 0;
      o = 0;
    }
  }

  cross(squares, row_length, count, x, o) {
    /*
    let track = 1;
    let rows = this.props.board_rows;
    for (let i = 0; i < rows ** 2; i++) {
      for (let a = i; a < rows ** 2; a += rows + 1) {
        if (squares[i] === 'X') {
          x++;
          o = 0;
          count++;
        } else if (squares[i] === 'O') {
          o++;
          x = 0;
          count++;
        } else {
          count = 0;
        }
        for (let b = rows - 1; b < rows; b += rows) {
          if (b === i) {
            track = 0;
          }
        }

        if (o >= row_length && count >= row_length) {
          return 'O';
        }
        if (o >= row_length && count >= row_length) {
          return 'X';
        }
        if (track === 0) {
          track = 1;
          break;
        }
      }
      o = 0;
      x = 0;
    }

    
    for (let j = row_length - 1; j < row_length ** 2 - 1; j += row_length - 1) {
      if (squares[j] === 'X') {
        x++;
      }
      if (squares[j] === 'O') {
        o++;
      }
      count++;
    }
    if (o === row_length) {
      return 'O';
    }
    if (x === row_length) {
      return 'X';
    }
    o = 0;
    x = 0;
    */
  }

  calculateWinner(squares, rows) {
    const count = 0;
    const x = 0;
    const o = 0;
    if (
      this.hor(squares, rows, count, x, o) === 'O' ||
      this.hor(squares, rows, count, x, o) === 'X'
    ) {
      return this.hor(squares, rows, count, x, o);
    } else if (
      this.vert(squares, rows, count, x, o) === 'O' ||
      this.vert(squares, rows, count, x, o) === 'X'
    ) {
      return this.vert(squares, rows, count, x, o);
    } else if (
      this.cross(squares, rows, count, x, o) === 'O' ||
      this.cross(squares, rows, count, x, o) === 'X'
    ) {
      return this.cross(squares, rows, count, x, o);
    }

    return null;
  }

  handleClick(i) {
    const hist = this.state.history;
    const squares = this.state.board;
    const rows = this.props.rows;
    if (this.calculateWinner(squares, rows) || squares[i]) {
      // ends the game
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    hist.push(i);
    this.setState({
      board: squares,
      history: hist,
      stepNumber: this.state.history.length,
      xIsNext: !this.state.xIsNext, // changes turn
    });
  }

  jumpTo(history, board, step) {
    for (let i = history.length - 1; i >= step; i--) {
      board[history.pop()] = null;
    }
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    
    const board = this.state.board;
    const history = this.state.history;
    const rows = this.props.rows;
    const winner = this.calculateWinner(board, rows);
    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Refresh';

      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(history, board, move)}>
            {desc}
          </button>
        </li>
      );
    });
    if(this.state.erase === true)
    let status;
    winner
      ? (status = 'Winner: ' + winner)
      : (status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O'));
    return (
      <div className="game">
        <div className="game-board">
          <Board
            rows={this.props.board_rows}
            squares={board}
            onClick={(i) => this.handleClick(i)}
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
