import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import GetDim from "./components/getDim/getDim";

// ========================================

// renders the game component to element

ReactDOM.render(
  <GetDim />, 
  document.getElementById("root") // returns <div id = "root"></div>
);
