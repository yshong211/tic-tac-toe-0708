import React from 'react';
import ReactDOM from 'react-dom';

function Square(props) {
    // gets value and onClick from renderSquare
    return (
      <button className = "square" onClick = {props.onClick}>
        {props.value}
      </button>
      );
  }

export 