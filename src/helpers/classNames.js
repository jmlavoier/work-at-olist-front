const classNames = stylesConditions => Object.keys(stylesConditions).reduce(
  (className, item) => {
    if (stylesConditions[item]) {
      return `${className} ${item}`
    }

    return className;
  }
, '');

export default classNames;
