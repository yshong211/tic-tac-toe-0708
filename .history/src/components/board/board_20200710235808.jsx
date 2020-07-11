import React from 'react';
import Square from '../square/square';
import './board.css';

export default class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  create_rq(start, end) {
    let rows = [];
    for (let i = start; i < end; i++) {
      rows.push(this.renderSquare(i));
    }
    return rows;
  }
  create_row(start) {
    let board_r = [];
    for (let i = 0; i < start; i++) {
      let new_r = i * start;
      let new_end = parseInt(new_r) + parseInt(start);
      board_r.push(
        <div className="board-row">{this.create_rq(new_r, new_end)}</div>
      );
    }
    return board_r;
  }
  render() {
    return <div>{this.create_row(this.props.rows)}</div>;
  }
}
