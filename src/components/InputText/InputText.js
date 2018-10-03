import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './InputText.sass';

const getInputStyles = (value, isValid, entered) => classNames(styles['input-text'], {
  [styles.invalid]: entered && !isValid,
  [styles.valid]: value && isValid,
});

class InputText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entered: false,
    };
    this.handleOnFocus = this.handleOnFocus.bind(this);
  }

  handleOnFocus() {
    this.setState({
      entered: true,
    });
  }

  render() {
    const {
      value,
      onChange,
      isValid,
      label,
      ...otherProps
    } = this.props;

    const { entered } = this.state;

    return (
      <div>
        {label && <span className={styles.label}>{label}</span>}
        <input
          className={getInputStyles(value, isValid, entered)}
          value={value}
          onChange={onChange}
          onFocus={this.handleOnFocus}
          {...otherProps}
        />
      </div>
    );
  }
}

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
