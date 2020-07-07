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
    create_row(start) { // creates row length of 3, var start is the starting index
      return (
        <div className="board-row"> 
          create_render
        </div>)
    }
    render() { // renders 9 squares
      return (
        <div> 
          {this.create_row(0)} {/* creates the first row */}
          {this.create_row(3)} {/* creates the second row */}
          {this.create_row(6)} {/* creates the third row */}
        </div>
      );
    }
  }


