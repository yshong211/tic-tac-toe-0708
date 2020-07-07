import React from 'react';
import Game from './game';


export default class GetDim extends React.Component {
    constructor(props) {
      super(props);
      this.state = {rows: 3};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({rows: event.target.value});
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
  
    render() {

      return (
      <div className = 'submission'>
        <form>
          <label>
            Board Size<br></br>
            <select value={this.state.rows} onChange={this.handleChange}>
                <option selected value="3">Original 3X3</option>
                <option value="4">4X4</option>
                <option value="5">5X5</option>
            </select>
          </label>
        </form>
        <Game 
            rows = {parseInt(this.state.rows)}
        />
      </div>
      );
    }
  }