import React, { Component } from 'react';
import moviesAPI from '../../services/moviesAPI';
import styles from './Reviews.module.css';

class Reviews extends Component {
  state = {
    reviews: null,
  };

  async componentDidMount() {
    const { id } = this.props;

    const response = await moviesAPI.fetchReviews(id);
    this.setState({ reviews: response.data.results });
  }

  render() {
    const { reviews } = this.state;

    return (
      <ul className={styles.ReviewsList}>
        {reviews && reviews.length > 0
          ? reviews.map(({ id, author, content, url }) => (
              <li key={id}>
                <h2>{author}</h2>
                <p>{content.slice(0, 500)}</p>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  ReadMore
                </a>
              </li>
            ))
          : 'Sorry, no info'}
      </ul>
    );
  }
}

export default Reviews;
