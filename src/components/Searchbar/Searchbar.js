import React, { Component } from 'react';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={styles.Form}>
          <input
            type="text"
            placeholder="Search movies"
            value={this.state.query}
            onChange={this.handleChange}
            className={styles.Input}
          />
          <button type="submit" className={styles.ButtonForm}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Searchbar;
