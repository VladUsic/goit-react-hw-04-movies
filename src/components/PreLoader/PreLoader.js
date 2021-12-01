import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './PreLoader.module.css';

const PreLoader = () => {
  return (
    <div className={styles.PreLoader}>
      <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default PreLoader;
