import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './board.js';



 


  }
  
  // ========================================
  
  // renders the game component to element
  ReactDOM.render(
    <Game />, // goes inside of the the second parameter;
    document.getElementById('root') // returns <div id = "root"></div> 
  );

  function calculateWinner(squares) {
    const lines = [ // Contains all the possible ways of winning 
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]; 
      // checks if the squares contains winning index
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
    }}
    
    return null;
  }
