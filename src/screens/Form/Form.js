import React from 'react';
import PropTypes from 'prop-types';
import Box from 'components/Box';

import Button from 'components/Button';
import InputText from 'components/InputText';
import PasswordStrength from 'components/PasswordStrength';
import styles from './Form.sass';

import {
  defaultValidation,
  nameValidation,
  emailValidation,
  confirmapassValidation,
} from './validations';

const isFormValid = form => (
  form.name.isValid
    && form.email.isValid
    && form.password.isValid
    && form.confirmpass.isValid
);

const handleChange = (fieldName, onChange, form, validate = defaultValidation) =>
  (event, prevIsValid) => {
    const { value } = event.currentTarget;
    const isValid = validate(value, prevIsValid);
    const { confirmpass } = form;

    onChange(fieldName, value, isValid);

    if (fieldName === 'password') {
      const isConfirmPassValid = confirmapassValidation(value)(confirmpass.value);
      onChange('confirmpass', confirmpass.value, isConfirmPassValid);
    }
  };

const handleClick = (onSubmit, form) => () => {
  if (isFormValid(form)) {
    onSubmit(form);
  }
};

const App = ({ form, onChange, onSubmit }) => {
  const {
    name,
    email,
    password,
    confirmpass,
    buttonSubmit,
  } = form;

  return (
    <div>
      <Box>
        <div className={styles.subtitle}>
          <h2>Crie sua conta</h2>
        </div>
        <InputText
          label="Nome completo"
          onChange={handleChange('name', onChange, form, nameValidation)}
          value={name.value}
          isValid={name.isValid}
        />
        <InputText
          label="E-mail"
          onChange={handleChange('email', onChange, form, emailValidation)}
          value={email.value}
          isValid={email.isValid}
        />
        <PasswordStrength
          onChange={handleChange('password', onChange, form)}
          value={password.value}
          isValid={password.isValid}
        />
        <InputText
          type="password"
          label="Confirme sua senha"
          onChange={handleChange(
            'confirmpass',
            onChange,
            form,
            confirmapassValidation(password.value),
          )}
          value={confirmpass.value}
          isValid={confirmpass.isValid}
        />
        <div className={styles.footer}>
          <Button
            type="buton"
            onClick={handleClick(onSubmit, form)}
            isLoading={buttonSubmit.isLoading}
            disabled={!isFormValid(form)}
          >
            Criar conta
          </Button>
        </div>
      </Box>
    </div>
  );
};

App.propTypes = {
  form: PropTypes.shape({
    name: PropTypes.object.isRequired,
    email: PropTypes.object.isRequired,
    password: PropTypes.object.isRequired,
    confirmpass: PropTypes.object.isRequired,
    buttonSubmit: PropTypes.object.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default App;
