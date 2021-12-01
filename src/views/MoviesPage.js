import React, { Component } from 'react';
import Searchbar from '../components/Searchbar';
import moviesAPI from '../services/moviesAPI';
import MoviesList from '../components/MoviesList';

const queryString = require('query-string');

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: '',
  };

  componentDidMount() {
    const query = this.queryParams(this.props);

    if (query) {
      this.onChangeQuery(query);
    }
  }

  onChangeQuery = query => {
    moviesAPI
      .fetchMoviesBySearch(query)
      .then(results => {
        this.setState({
          searchQuery: query,
          movies: results,
        });
      })
      .then(() => {
        const { history, location } = this.props;
        history.push({
          pathname: location.pathname,
          search: `?query=${query}`,
        });
      });
  };

  queryParams = props => queryString.parse(props.location.search).query;

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onChangeQuery} />
        <MoviesList movies={this.state.movies} />
      </div>
    );
  }
}

export default MoviesPage;
