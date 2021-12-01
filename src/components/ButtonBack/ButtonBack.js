import React from 'react';
import { ReactComponent as IconArrow } from '../../images/arrow.svg';
import styles from './ButtonBack.module.css';

const ButtonBack = ({ onClick }) => {
  return (
    <button className={styles.ButtonBack} type="button" onClick={onClick}>
      <IconArrow width="20" height="20" className={styles.Icon} /> Go Back
    </button>
  );
};

export default ButtonBack;
