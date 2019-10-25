import React from "react";
import axios from "axios";
// import Log from "debug";

export default class LanguageInput extends React.Component {
  state = {
    language: "",
    jobs: []
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
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=${language.language}`
      )
      .then(rep => {
        // console.log(rep.JSON());
        this.setState({ jobs: rep.data });
      });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Programming Language:</label>
          <input
            id="search"
            type="text"
            placeholder="favorite code language"
            name="language"
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>

        <p>{this.state.language}</p>
        <ul>
          {this.state.jobs.map((job, index) => {
            console.log(job);
            // console.log(job.type + ": " + job.company);
            // console.log(index);
            return (
              <li key={index}>
                <a href={job.url}>{job.title}</a> | {job.company}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
