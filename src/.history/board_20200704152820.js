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
    create_rq(start) {
      let rows = []
      for(let i = 0; i< start; i++){
        rows.push(this.renderSquare(i));
      }
      return rows
    }
    create_row(start) { // creates row length of 3, var start is the starting index
      let board_r = [];
      for(let i = 0; i< start; i++){
        board_r.push(
        <div className="board-row"> 
          {this.create_rq(start)}
      </div>);
      }
      return board_r.push

    }
    render() { // renders 9 squares
      return (
        <div> 
          {this.create_row(this.props.rows)} 
        </div>
      );
    }
  }


