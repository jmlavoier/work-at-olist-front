import React from 'react';
import { shallow } from 'enzyme';

import PasswordStrength from './PasswordStrength';

describe('<PasswordStrength />', () => {
  it('Should component render with default props', () => {
    const onChange = jest.fn();
    const value = '';
    const wrapper = shallow(<PasswordStrength onChange={onChange} value={value} />);

    expect(wrapper.childAt(1).childAt(0).childAt(0).hasClass('gray')).toBeTruthy();
    expect(wrapper.childAt(1).childAt(0).childAt(1).hasClass('gray')).toBeTruthy();
    expect(wrapper.childAt(1).childAt(0).childAt(2).hasClass('gray')).toBeTruthy();
  });

  it('Should component render with all rules false', () => {
    const onChange = jest.fn();
    const value = 'x';

    const wrapper = shallow(<PasswordStrength onChange={onChange} value={value} />);

    expect(wrapper.childAt(1).childAt(0).childAt(0).hasClass('gray')).toBeTruthy();
    expect(wrapper.childAt(1).childAt(0).childAt(1).hasClass('gray')).toBeTruthy();
    expect(wrapper.childAt(1).childAt(0).childAt(2).hasClass('gray')).toBeTruthy();
  });

  it('Should component render with only rules.hasMinChar true', () => {
    const onChange = jest.fn();
    const value = 'xxxxxx';

    const wrapper = shallow(<PasswordStrength onChange={onChange} value={value} />);

    expect(wrapper.childAt(1).childAt(0).childAt(0).hasClass('red')).toBeTruthy();
    expect(wrapper.childAt(1).childAt(0).childAt(1).hasClass('gray')).toBeTruthy();
    expect(wrapper.childAt(1).childAt(0).childAt(2).hasClass('gray')).toBeTruthy();
  });

  it('Should component render with just rules.hasUppercase true', () => {
    const onChange = jest.fn();
    const value = 'U';

    const wrapper = shallow(<PasswordStrength onChange={onChange} value={value} />);

    expect(wrapper.childAt(1).childAt(0).childAt(0).hasClass('red')).toBeTruthy();
    expect(wrapper.childAt(1).childAt(0).childAt(1).hasClass('gray')).toBeTruthy();
    expect(wrapper.childAt(1).childAt(0).childAt(2).hasClass('gray')).toBeTruthy();
  });

  it('Should component render with only rules.hasNumber true', () => {
    const onChange = jest.fn();
    const value = '123';

    const wrapper = shallow(<PasswordStrength onChange={onChange} value={value} />);

    expect(wrapper.childAt(1).childAt(0).childAt(0).hasClass('red')).toBeTruthy();
    expect(wrapper.childAt(1).childAt(0).childAt(1).hasClass('gray')).toBeTruthy();
    expect(wrapper.childAt(1).childAt(0).childAt(2).hasClass('gray')).toBeTruthy();
  });

  it('Should component render with only rules.hasMinChar and rules.hasUppercase true', () => {
    const onChange = jest.fn();
    const value = 'Xxxxxx';

    const wrapper = shallow(<PasswordStrength onChange={onChange} value={value} />);

    expect(wrapper.childAt(1).childAt(0).childAt(0).hasClass('yellow')).toBeTruthy();
    expect(wrapper.childAt(1).childAt(0).childAt(1).hasClass('yellow')).toBeTruthy();
    expect(wrapper.childAt(1).childAt(0).childAt(2).hasClass('gray')).toBeTruthy();
  });

  it('Should component render with only rules.hasNumber and rules.hasUppercase true', () => {
    const onChange = jest.fn();
    const value = '1U';

    const wrapper = shallow(<PasswordStrength onChange={onChange} value={value}/>);

    expect(wrapper.childAt(1).childAt(0).childAt(0).hasClass('yellow')).toBeTruthy();
    expect(wrapper.childAt(1).childAt(0).childAt(1).hasClass('yellow')).toBeTruthy();
    expect(wrapper.childAt(1).childAt(0).childAt(2).hasClass('gray')).toBeTruthy();
  });

  it('Should component render with only rules.hasNumber and rules.hasMinChar true', () => {
    const onChange = jest.fn();
    const value = '1xxxxx';

    const wrapper = shallow(<PasswordStrength onChange={onChange} value={value} />);

    expect(wrapper.childAt(1).childAt(0).childAt(0).hasClass('yellow')).toBeTruthy();
    expect(wrapper.childAt(1).childAt(0).childAt(1).hasClass('yellow')).toBeTruthy();
    expect(wrapper.childAt(1).childAt(0).childAt(2).hasClass('gray')).toBeTruthy();
  });

  it('Should component render with all rules true', () => {
    const onChange = jest.fn();
    const value = '1Xxxxx';

    const wrapper = shallow(<PasswordStrength onChange={onChange} value={value} />);

    expect(wrapper.childAt(1).childAt(0).childAt(0).hasClass('green')).toBeTruthy();
    expect(wrapper.childAt(1).childAt(0).childAt(1).hasClass('green')).toBeTruthy();
    expect(wrapper.childAt(1).childAt(0).childAt(2).hasClass('green')).toBeTruthy();
  });
});
