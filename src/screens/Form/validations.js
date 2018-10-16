const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const defaultValidation = (value, prevIsValid) => prevIsValid;
export const nameValidation = value => value.length > 0;
export const emailValidation = value => emailRegex.test(value);
export const confirmapassValidation = (passwordValue, value) => passwordValue === value;
