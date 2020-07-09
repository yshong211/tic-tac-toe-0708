import React from 'react';
import Game from '../game/game';

export default class GetDim extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rows: 3, winning: 3 };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  }

  how_many(rows) {
    let how = [];
    for (let i = 3; i <= rows; i++) {
      how.push(<option value={i}>{i}</option>);
    }
    return how;
  }

  render() {
    return (
      <div className="submission">
        <form>
          <label>
            Board Size
            <br></br>
            <input
              name="rows"
              type="number"
              value={this.state.rows}
            />
          </label>
          <br />
          <label>
            <select
              name="winning"
              value={this.state.winning}
              onChange={this.handleInputChange}
            >
              {this.how_many(this.state.rows)}
            </select>
          </label>
        </form>
        <Game
          rows={parseInt(this.state.winning)}
          board_rows={parseInt(this.state.rows)}
        />
      </div>
    );
  }
}
