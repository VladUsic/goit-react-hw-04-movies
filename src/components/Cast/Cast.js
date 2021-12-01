import React, { Component } from 'react';
import moviesAPI from '../../services/moviesAPI';
import styles from './Cast.module.css';

class Cast extends Component {
  state = {
    baseUrl: 'https://image.tmdb.org/t/p/w200',
    casts: null,
  };
  async componentDidMount() {
    const { id } = this.props;
    const response = await moviesAPI.fetchCast(id);
    this.setState({ casts: response.data.cast });
  }
  render() {
    const { casts, baseUrl } = this.state;
    return (
      <ul className={styles.ListCast}>
        {casts &&
          casts.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              {<img src={baseUrl + profile_path} alt={name} />}
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
      </ul>
    );
  }
}
export default Cast;
