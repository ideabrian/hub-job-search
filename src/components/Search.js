import React from "react";
import axios from "axios";

export default class Search extends React.Component {
  state = {
    search: "",
    jobs: []
  };

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const search = {
      search: this.state.search
    };

    console.log(search.search);
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=${search.search}`
      )
      .then(rep => {
        this.setState({ jobs: rep.data });
      });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Search Jobs on Github:</label>
          <input
            id="search"
            type="text"
            placeholder="favorite code language"
            name="language"
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>

        <p>{this.state.search}</p>
        <ul>
          {this.state.jobs.map((job, index) => {
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
