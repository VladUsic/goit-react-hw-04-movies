import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import moviesAPI from '../services/moviesAPI';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import MovieDetails from '../components/MovieDetails';
import ButtonBack from '../components/ButtonBack';
import routes from '../routes';
import styles from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
    title: null,
    overview: null,
    vote_average: null,
    release_date: null,
    id: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    moviesAPI
      .fetchMovieId(movieId)
      .then(
        ({ poster_path, title, overview, release_date, vote_average, id }) =>
          this.setState({
            poster_path,
            title,
            overview,
            release_date,
            vote_average,
            id,
          }),
      );
  }

  onClickBtnBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const movieId = Number(this.props.match.params.movieId);
    const { match, location } = this.props;
    const deepLocation = location.state.from;

    const { poster_path, title, overview, release_date, vote_average } =
      this.state;
    return (
      <div>
        <ButtonBack onClick={this.onClickBtnBack} />
        <MovieDetails
          poster_path={poster_path}
          title={title}
          overview={overview}
          release_date={release_date}
          vote_average={vote_average}
        />

        <ul className={styles.List}>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/cast`,
                state: { from: deepLocation },
              }}
              className={styles.NavLink}
              activeClassName={styles.NavLink_Active}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/reviews`,
                state: { from: deepLocation },
              }}
              className={styles.NavLink}
              activeClassName={styles.NavLink_Active}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Route
          path={`${match.path}/cast`}
          render={props => <Cast {...props} id={movieId} />}
        />
        <Route
          path={`${match.path}/reviews`}
          render={props => <Reviews {...props} id={movieId} />}
        />
      </div>
    );
  }
}

export default MovieDetailsPage;
