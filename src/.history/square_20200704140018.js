import React from 'react';

export default function Square(props) {
    // gets value and onClick from renderSquare
    return (
      <button className = "square" onClick = {props.onClick}>
        {props.value}
      </button>
      );
  }
