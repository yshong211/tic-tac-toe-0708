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
      if(this.state.rows < 3){
        alert('Type more than 2 rows')
      }
      else{
        alert('New Dimension is set: ' + this.state.rows + 'X' + this.state.rows);
      }
      event.preventDefault();
    
    }
  
    render() {
      return (
      <div className = 'submission'>
        <form onSubmit={this.handleSubmit}>
          <label>
            How many Rows?<br></br>
            (if you want to play with more than 3 rows):<br></br>
            <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </form>
        <Game 
            rows = {this.state.rows}
        />
      </div>
      );
    }
  }