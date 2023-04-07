import React from 'react';
import styles from './Banner.module.css';

function Podcast() {
  return (
    <div className={styles.center}>
      <div>
        <h1 className={styles.h1}>Listen to the Podcast Here!</h1>
      </div>
      <div>
        <a
          className={styles.pod}
          href="https://baconsale.com/"
          target={'_blank'}
        >
          Click here for Baconsale Podcast
          <br />
          <br />
          <br />
          <img src="./baconsale.jpg" alt="baconsale" />
        </a>
      </div>
    </div>
  );
}

export default Podcast;
