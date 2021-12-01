import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MoviePreview from '../MoviePreview';
import styles from './MoviesList.module.css';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={styles.List}>
      {movies.map(
        ({ id, poster_path, title, vote_average, name, release_date }) => (
          <li key={id} className={styles.ListItem}>
            <Link
              className={styles.Link}
              to={{
                pathname: `/movies/${id}`,
                state: {
                  from: location,
                },
              }}
            >
              <MoviePreview
                posterUrl={poster_path}
                title={title}
                vote={vote_average}
                name={name}
                releaseDate={release_date}
              />
            </Link>
          </li>
        ),
      )}
    </ul>
  );
};

export default withRouter(MoviesList);
