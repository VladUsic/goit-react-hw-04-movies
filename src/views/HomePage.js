import React, { Component } from 'react';
import MoviesList from '../components/MoviesList';
import moviesAPI from '../services/moviesAPI';

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    moviesAPI
      .fetchMovies()
      .then(results => this.setState({ movies: [...results] }));
  }

  render() {
    const { movies } = this.state;
    return <MoviesList movies={movies} />;
  }
}

export default HomePage;
