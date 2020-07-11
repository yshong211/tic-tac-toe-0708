import React from 'react';
import Board from '../board/board';
import './game.css';

export default class Game extends React.Component {
  /*
  constructor(props) {
    
    super(props);
    this.state = {
      history: [], // track the last index
      stepNumber: 0, // count var
      xIsNext: true,
    };
  }

  }
*/
  hor(squares, row_length, board_rows, count, x, o) {
    let index = 0;
    for (let i = 0; i < board_rows; i++) {
      for (let j = 0; j < board_rows; j++) {
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

  vert(squares, row_length, board_rows, count, x, o) {
    for (let i = 0; i < board_rows; i++) {
      for (let j = i; j < board_rows ** 2; j += board_rows) {
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

  rl_cross(squares, row_length, board_rows, count, x, o) {
    for (let k = 0; k < board_rows ** 2; k++) {
      for (let i = k; i < board_rows ** 2; i += board_rows + 1) {
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
        for (let z = board_rows - 1; z < board_rows ** 2; z += board_rows) {
          if (i === z) {
            break;
          }
        }
        for (let y = board_rows * (board_rows - 1); y < board_rows ** 2; y++) {
          if (i === y) {
            break;
          }
        }
        if (o >= row_length && count >= row_length) {
          return 'O';
        }
        if (x >= row_length && count >= row_length) {
          return 'X';
        }
      }
      o = 0;
      x = 0;
    }
  }

  lr_cross(squares, row_length, board_rows, count, x, o) {
    for (let k = 0; k < board_rows ** 2; k++) {
      for (let i = k; i < board_rows ** 2; i += board_rows - 1) {
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
        for (let z = board_rows; z < board_rows ** 2; z += board_rows) {
          if (i === z) {
            break;
          }
        }
        for (let y = board_rows * (board_rows - 1); y < board_rows ** 2; y++) {
          if (i === y) {
            break;
          }
        }
        if (o >= row_length && count >= row_length) {
          return 'O';
        }
        if (x >= row_length && count >= row_length) {
          return 'X';
        }
      }

      o = 0;
      x = 0;
    }
  }

  calculateWinner(squares, rows) {
    const count = 0;
    const x = 0;
    const o = 0;
    const board_rows = this.props.board_rows;
    if (this.hor(squares, rows, board_rows, count, x, o)) {
      return this.hor(squares, rows, board_rows, count, x, o);
    }
    if (this.vert(squares, rows, board_rows, count, x, o)) {
      return this.vert(squares, rows, board_rows, count, x, o);
    }
    if (this.rl_cross(squares, rows, board_rows, count, x, o)) {
      return this.rl_cross(squares, rows, board_rows, count, x, o);
    }
    if (this.lr_cross(squares, rows, board_rows, count, x, o)) {
      return this.lr_cross(squares, rows, board_rows, count, x, o);
    }
    return null;
  }

  handleClick(i) {
    const hist = this.props.history;
    const squares = this.props.board;
    const rows = this.props.rows;
    if (this.calculateWinner(squares, rows) || squares[i]) {
      // ends the game
      return;
    }
    squares[i] = this.props.xIsNext ? 'X' : 'O';
    hist.push(i);
    this.setState({
      board: squares,
      history: hist,
      stepNumber: this.props.history.length,
      xIsNext: !this.props.xIsNext, // changes turn
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
    const board = this.props.board;
    const history = this.props.history;
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
    if (board.length === 0) {
      this.jumpTo(history, board, 0);
    }
    let status;
    winner
      ? (status = 'Winner: ' + winner)
      : (status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O'));

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
          <div>{rows} in a row</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
