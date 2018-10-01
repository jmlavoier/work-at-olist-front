import { createRules } from './helpers';

describe('createRules', () => {
  it('Should function return all rules false', () => {
    const value = '';
    const res = createRules(value);
    const rules = {
      hasMinChar: false,
      hasUppercase: false,
      hasNumber: false,
    };

    expect(res).toEqual(rules);
  });

  it('Should function return only hasMinChar true', () => {
    const value = 'xxxxxx';
    const res = createRules(value);

    expect(res.hasMinChar).toBeTruthy();
  });

  it('Should function return only hasUppercase true', () => {
    const value = 'X';
    const res = createRules(value);

    expect(res.hasUppercase).toBeTruthy();
  });

  it('Should function return only hasNumber true', () => {
    const value = '1';
    const res = createRules(value);

    expect(res.hasNumber).toBeTruthy();
  });
});
