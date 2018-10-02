import React from 'react';
import Box from 'components/Box';

import IconRight from 'components/IconRight';

import styles from './Success.sass';

const Success = () => (
  <div className={styles.success}>
    <Box>
      <div className={styles.icon}>
        <IconRight />
      </div>
      <div className={styles.body}>
        <h2>Tudo certo</h2>
        <p>
          Verifique sua caixa de entrada para confirmar seu e-mail.
        </p>
      </div>
    </Box>
  </div>
);

export default Success;
