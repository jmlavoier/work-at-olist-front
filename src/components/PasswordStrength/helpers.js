import classNames from 'classnames';
import styles from './PasswordStrength.sass';

export const createRules = value => ({
  hasMinChar: value.length >= 6,
  hasUppercase: /[A-Z]+/.test(value),
  hasNumber: /[0-9]+/.test(value),
});

export const getStrengthvalue = (rules) => {
  const {
    hasMinChar,
    hasUppercase,
    hasNumber,
  } = rules;

  return (hasMinChar ? 1 : 0) + (hasUppercase ? 1 : 0) + (hasNumber ? 1 : 0);
};

export const getStylesBar1 = strengthValue => classNames({
  [styles.gray]: strengthValue === 0,
  [styles.red]: strengthValue === 1,
  [styles.yellow]: strengthValue === 2,
  [styles.green]: strengthValue === 3,
});

export const getStylesBar2 = strengthValue => classNames({
  [styles.gray]: strengthValue <= 1,
  [styles.yellow]: strengthValue === 2,
  [styles.green]: strengthValue === 3,
});

export const getStylesBar3 = strengthValue => classNames({
  [styles.gray]: strengthValue <= 2,
  [styles.green]: strengthValue === 3,
});

export const getStylesRule = (value, attendRule) => classNames(styles.rule, {
  [styles['rule-red']]: value && !attendRule,
  [styles['rule-green']]: value && attendRule,
});

export const styleSheet = {
  inputText: {
    width: '100%',
    marginBottom: 0,
  },
};
