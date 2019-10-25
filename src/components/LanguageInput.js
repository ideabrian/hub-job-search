import React from "react";
import axios from "axios";
// import Log from "debug";

export default class LanguageInput extends React.Component {
  state = {
    language: ""
  };

  handleChange = event => {
    console.log("CHANGING");
    this.setState({ language: event.target.value });
  };

  handleSubmit = event => {
    // Log.info(`App Component`);
    event.preventDefault();
    console.log("HANDLE SUZBMIT");
    const language = {
      language: this.state.language
    };
    console.log(language.language);
    axios
      .get(
        `https://jobs.github.com/positions?description=${language.language}&location=sf`
      )
      .then(rep => {
        // console.log(rep.JSON());
        console.log(rep.data);
      });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Programming Language:</label>
          <input
            type="text"
            placeholder="favorite code language"
            name="language"
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>

        <p>List Below</p>
        {/* <ul>
          {this.state.jobs.map(job => (
            <li key={job.id}>{job.title}</li>
          ))}
        </ul> */}
      </div>
    );
  }
}
