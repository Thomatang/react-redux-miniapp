import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props); // super is used to call a method from the parent class Component

    this.state = { term: "" };
  }

  render() {
    // every class must have a render function
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
