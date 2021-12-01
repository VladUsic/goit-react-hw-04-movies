import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.List}>
        <li className={styles.ListItem}>
          <NavLink
            exact
            to="/"
            className={styles.NavLink}
            activeClassName={styles.NavLink_Active}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.ListItem}>
          <NavLink
            to="/movies"
            className={styles.NavLink}
            activeClassName={styles.NavLink_Active}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
