import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './InputText.sass';

const getInputStyles = (value, isValid) => classNames(styles['input-text'], {
  [styles.invalid]: value && !isValid,
  [styles.valid]: value && isValid,
});

const InputText = ({
  value,
  onChange,
  isValid,
  label,
  ...otherProps
}) => (
  <div>
    {label && <span className={styles.label}>{label}</span>}
    <input className={getInputStyles(value, isValid)} value={value} onChange={onChange} {...otherProps} />
  </div>
);

InputText.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool,
  label: PropTypes.string,
};

InputText.defaultProps = {
  value: '',
  isValid: true,
  label: '',
};

export default InputText;
