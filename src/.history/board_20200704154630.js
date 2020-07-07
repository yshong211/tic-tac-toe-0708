import React from 'react';
import Square from './square.js';


export default class Board extends React.Component { 
    renderSquare(i) {
      // value and onclick value transfers to component Square 
      return(
        <Square 
          value={this.props.squares[i]} // got val from {current.squares}
          onClick={() => this.props.onClick(i)} // got val from {i => this.handleClick(i)}
        />
      );
    }
    create_rq(start,en) {
      let rows = []
      for(let i = start; i<new_len; i++){
        rows.push(this.renderSquare(i));
      }
      return rows
    }
    create_row(start) { // creates row length of 3, var start is the starting index
      let board_r = [];
      for(let i = 0; i < start; i++){
        let new_r = i*start
        board_r.push(
        <div className="board-row"> 
          {this.create_rq(new_r,new_r+start)}
        </div>);
      }
      return board_r

    }
    render() { // renders 9 squares
      return (
        <div> 
          {this.create_row(this.props.rows)} 
        </div>
      );
    }
  }


