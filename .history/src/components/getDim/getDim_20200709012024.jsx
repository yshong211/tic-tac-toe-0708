import React from 'react';
import Game from '../game/game';
import './getDim.css';

export default class GetDim extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rows: 3, winning: 3, erase: false };

    //this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  }

  handleClick(e) {
    e.preventDefault();
    if (window.confirm('Change fosho?')) {
      this.setState({
        rows: this.refs.rows.value,
        erase: true
      });
    }
  }
  /*
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
  */
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
            <input ref="rows" type="number" />
            <button
              className="submit"
              onClick={(e) => {
                this.handleClick(e);
              }}
            >
              Submit
            </button>
          </label>

          <br />

          <label>
            Winning Rows<span></span>
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
          board={[]}
        />
      </div>
    );
  }
}
