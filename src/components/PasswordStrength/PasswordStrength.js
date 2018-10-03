import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import InputText from 'components/InputText';
import styles from './PasswordStrength.sass';

import {
  createRules,
  getStrengthvalue,
  getStylesBar1,
  getStylesBar2,
  getStylesBar3,
  getStylesRule,
  styleSheet,
} from './helpers';

const handleChange = onChange => (event) => {
  const { value } = event.currentTarget;
  const rules = createRules(value);
  const strengthValue = getStrengthvalue(rules);
  const isValid = strengthValue === 3;

  onChange(event, isValid);
};

const PasswordStrength = ({ value, onChange, isValid }) => {
  const rules = createRules(value);
  const strengthValue = getStrengthvalue(rules);

  return (
    <Fragment>
      <InputText
        type="password"
        label="Senha"
        value={value}
        onChange={handleChange(onChange, rules)}
        style={styleSheet.inputText}
        isValid={isValid}
      />
      <div>
        <div className={styles['strength-bars']}>
          <span className={getStylesBar1(strengthValue)} />
          <span className={getStylesBar2(strengthValue)} />
          <span className={getStylesBar3(strengthValue)} />
        </div>
        <ul className={styles.rules}>
          <li className={getStylesRule(value, rules.hasMinChar)}>Pelo menos 6 caracteres</li>
          <li className={getStylesRule(value, rules.hasUppercase)}>Pelo menos 1 letra maiúscula</li>
          <li className={getStylesRule(value, rules.hasNumber)}>Pelo menos 1 número</li>
        </ul>
      </div>
    </Fragment>
  );
};

PasswordStrength.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool,
};

PasswordStrength.defaultProps = {
  isValid: false,
};

export default PasswordStrength;
