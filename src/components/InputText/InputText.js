import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './InputText.sass';

const getInputStyles = isValid => classNames(styles['input-text'], {
  [styles.invalid]: !isValid,
});

const InputText = ({
  value,
  onChange,
  isValid,
  label,
}) => (
  <div>
    {label && <span className={styles.label}>{label}</span>}
    <input className={getInputStyles(isValid)} value={value} onChange={onChange} />
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
