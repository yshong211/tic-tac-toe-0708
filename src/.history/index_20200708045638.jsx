import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import GetDim from "./getDim/getDim";

// ========================================

// renders the game component to element

ReactDOM.render(
  <GetDim />, // goes inside of the the second parameter;
  document.getElementById("root") // returns <div id = "root"></div>
);
