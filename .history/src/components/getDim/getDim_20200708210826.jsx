import React from 'react';
import Game from '../game/game';

export default class GetDim extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rows: 3, winning: 3 };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    this.rows = this.state.rows;
    this.winning = this.state.winning;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (window.confirm('It will be renewed')) {
      const value = event.target.value;
      const name = event.target.name;
      this.setState({
        [name]: value,
      });
    }
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
            <br />
            <select
              name="rows"
              value={this.state.rows}
              onChange={this.handleInputChange}
            >
              {this.how_many(10)}
            </select>
          </label>

          <br />

          <label>
            Winning Rows
            <select
              name="winning"
              value={this.state.winning}
              onChange={this.handleInputChange}
            >
              {this.how_many(this.state.rows)}
            </select>
          </label>
          <button onClick={this.handleClick}>Change?</button>
        </form>

        <Game
          rows={parseInt(this.winning)}
          board_rows={parseInt(this.rows)}
          board={[]}
        />
      </div>
    );
  }
}
