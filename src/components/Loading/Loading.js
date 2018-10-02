import React from 'react';
import styles from './Loading.sass';

const Loading = () => (
  <div className={styles.loading}>
    <span className={styles.spin1} />
    <span className={styles.spin2} />
    <span className={styles.spin3} />
  </div>
);

export default Loading;
