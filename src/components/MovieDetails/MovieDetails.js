import React from 'react';
import styles from './MovieDetails.module.css';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w400';

const MovieDetails = ({
  poster_path,
  title,
  overview,
  release_date,
  vote_average,
}) => {
  return (
    <div className={styles.Thumb}>
      <img
        src={`${BASE_POSTER_URL}${poster_path}`}
        alt={title}
        className={styles.ImgMovie}
      />
      <div>
        <h2>{title}</h2>
        <p className={styles.Description}>
          Release data: <span className={styles.SpanText}>{release_date}</span>
        </p>
        <p className={styles.Description}>
          Rating: <span className={styles.SpanText}>{vote_average}</span>
        </p>
        <p className={styles.Description}>
          Overview:<span className={styles.SpanText}> {overview}</span>
        </p>
      </div>
      <p className={styles.Information}>Additional information</p>
    </div>
  );
};

export default MovieDetails;
