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
        let how = [];
        for(let i = 3; i <= rows; i++){
            how.push(<option value="6">i</option>)
        }
        return how;
    }
  
    render() {

      return (
      <div className = 'submission'>
        <form>
          <label>
            Board Size<br></br>
            <input type="int" value={this.state.rows} onChange={this.handleChange} /><br></br>            
          </label>
          <label>
              
          </label>
        </form>
        <Game 
            rows = {parseInt(this.state.rows)}
        />
      </div>
      );
    }
  }