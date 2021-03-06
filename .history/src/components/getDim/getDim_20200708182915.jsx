import React from 'react';
import Game from '../game/game';

export default class GetDim extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rows: 3, winning: 3 };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  /*
  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  }
*/
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
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
        <form onSubmit={this.handleSubmit}>
          <label>
            Board Size
            <br />
            <input name="rows" type="number" value={this.state.rows} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <br />
        <form>
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
