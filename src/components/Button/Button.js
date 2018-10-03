import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/Loading';
import classNames from 'classnames';

import styles from './Button.sass';

const getStyles = (isLoading, disabled) => classNames(styles.button, {
  [styles['border-rounded']]: isLoading,
  [styles.pointer]: !disabled,
});

const Button = ({
  children,
  onClick,
  isLoading,
  disabled,
  ...otherProps
}) => (
  <button className={getStyles(isLoading, disabled)} onClick={onClick} {...otherProps}>
    {!isLoading ? children : <Loading />}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  children: '',
  isLoading: false,
  disabled: false,
};

export default Button;
