import React from 'react';
import Logo from 'components/Logo';

import styles from './Box.sass';

const Box = ({ children, ...otherProps }) => (
  <div className={styles.box} {...otherProps}>
    <div className={styles.header}>
      <Logo />
    </div>
    <div>
      {children}
    </div>
  </div>
);

export default Box;
