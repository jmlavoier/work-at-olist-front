import React from 'react';
import Box from 'components/Box';

import Button from 'components/Button';
import InputText from 'components/InputText';
import PasswordStrength from 'components/PasswordStrength';
import styles from './Form.sass';

const App = () => (
  <div>
    <Box>
      <div className={styles.subtitle}>
        <h2>Crie sua conta</h2>
      </div>
      <InputText label="Nome completo" onChange={() => {}} value="" />
      <InputText label="E-mail" onChange={() => {}} value="" />
      <PasswordStrength onChange={() => {}} value="" />
      <InputText type="password" label="Confirme sua senha" onChange={() => {}} value="" />
      <div className={styles.footer}>
        <Button onClick={() => {}} >Criar conta</Button>
      </div>
    </Box>
  </div>
);

export default App;
