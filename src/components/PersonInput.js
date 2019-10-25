import React from "react";
import axios from "axios";
// import Log from "debug";

export default class PersonInput extends React.Component {
  state = {
    name: ""
  };

  handleChange = event => {
    console.log("CHANGING");
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    // Log.info(`App Component`);
    event.preventDefault();
    console.log("HANDLE SUZBMIT");
    const user = {
      name: this.state.name
    };
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(rep => {
        // console.log(rep.JSON());
        console.log(rep.data.user.name + `[${rep.data.id}]`);
      });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Person Name:</label>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={this.handleChange}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}
