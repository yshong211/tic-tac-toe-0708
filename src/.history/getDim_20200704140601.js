import React from 'react';


export default class GetDim extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 3};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      if()
      alert('New Dimention is set: ' + this.state.value + 'X' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            How many Rows?<br></br>
            (if you want to play with more than 3 rows):<br></br>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }