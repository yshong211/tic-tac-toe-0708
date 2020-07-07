import React from 'react';
import Game from './game';


export default class GetDim extends React.Component {
    constructor(props) {
      super(props);
      this.state = {rows: 3};
      this.handleChange = this.handleChange.bind(this);

    }
    handleChange(event) {
      this.setState({rows: event.target.value});
    }
    how_many(rows) {
        for(let i = 3; ;i++)
    }
  
    render() {

      return (
      <div className = 'submission'>
        <form>
          <label>
            Board Size<br></br>
            <input type="int" value={this.state.value} onChange={this.handleChange} /><br></br>
            <select>

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