import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/Loading';
import classNames from 'classnames';

import styles from './Button.sass';

const getStyles = isLoading => classNames(styles.button, {
  [styles['border-rounded']]: isLoading,
});

const Button = ({ children, onClick, isLoading }) => (
  <button className={getStyles(isLoading)} onClick={onClick}>
    {!isLoading ? children : <Loading />}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  children: '',
  isLoading: false,
};

export default Button;
