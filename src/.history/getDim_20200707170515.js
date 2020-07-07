import React from 'react';
import Game from './game';


export default class GetDim extends React.Component {
    constructor(props) {
      super(props);
      this.state = {rows: 3, winning: 3};
      this.handleChange = this.handleChange.bind(this);

    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.name === '' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
      
    how_many(rows) {
        let how = [];
        for(let i = 3; i <= rows; i++){
            how.push(<option value={i}>{i}</option>)
        }
        return how;
    }
  
    render() {

      return (
      <div className = 'submission'>
        <form>
          <label>
            Board Size<br></br>
            <input type="int" value={this.state.rows} onChange={this.handleChange} />           
          </label>
          <br />
          <label>
            <select value={this.state.winning} onChange={this.handleChange2}>
                {this.how_many(this.state.rows)}
            </select>
          </label>
        </form>
        <Game 
            rows = {parseInt(this.state.winning)}
            board_rows = {parseInt(this.state.rows)}
            
        />
      </div>
      );
    }
  }