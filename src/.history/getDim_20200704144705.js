import React from 'react';
import Game from './game';


export default class GetDim extends React.Component {
    constructor(props) {
      super(props);
      this.state = {rows: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      if(this.state.value <= 3){
          alert('Type only if you want to play with more than 3 rows')
      }
      alert('New Dimension is set: ' + this.state.rows + 'X' + this.state.rows);
      event.preventDefault();
    }
  
    render() {
      return (
      <div className = 'submission'>
        
        <form onSubmit={this.handleSubmit}>
          <label>
            How many Rows?<br></br>
            (if you want to play with more than 3 rows):<br></br>
            <input type="text" value={this.state.rows} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Game 
            rows = {this.state.rows}
        />
      </div>
      );
    }
  }