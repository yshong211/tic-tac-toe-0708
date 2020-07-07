import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './game';
  
  // ========================================
  
  // renders the game component to element

  ReactDOM.render(
    <Game />, // goes inside of the the second parameter;
    document.getElementById('root') // returns <div id = "root"></div> 
  );

