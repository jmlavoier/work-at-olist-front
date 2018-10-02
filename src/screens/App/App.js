import React from 'react';

import Success from 'screens/Success';
import styles from './App.sass';

const App = () => (
  <div className={styles.container}>
    <div className={styles.box}>
      <Success />
    </div>
  </div>
);

export default App;
