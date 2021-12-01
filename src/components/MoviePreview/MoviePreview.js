import React from 'react';
import styles from './MoviePreview.module.css';

const MOVIE_PREVIEW_URL = 'https://image.tmdb.org/t/p/w400';

const MoviePreview = ({ posterUrl, title, vote, name, releaseDate }) => {
  return (
    <div>
      <img
        src={`${MOVIE_PREVIEW_URL}${posterUrl}`}
        alt={`${title} poster`}
        className={styles.ImagesItem}
      />
      <div className={styles.Thumb}>
        <div className={styles.DescriptionMovie}>
          <p className={styles.Text}>{title ? title : name}</p>
          <p className={styles.Rating}>
            {vote}
            <span role="img" aria-label="star-emoji">
              ⭐
            </span>
          </p>
        </div>
        <p className={styles.Release}>{releaseDate}</p>
      </div>
    </div>
  );
};

export default MoviePreview;
