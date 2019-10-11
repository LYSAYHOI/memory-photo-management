import React from 'react';
import styles from './photograph.module.css';

class Photograph extends React.Component {
  render() {
    const { src, alt, className } = this.props;
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
}

export default Photograph;
