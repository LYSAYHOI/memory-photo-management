import React from 'react';
import styles from './photograph.module.css';

function Photograph(props) {
  const { src, alt, className } = props;
  return (
    <div className={styles.root}>
      <img
        src={src}
        alt={alt}
        className={`${styles.photo} ${className}`}
      />
    </div>
  );
}

export default Photograph;
