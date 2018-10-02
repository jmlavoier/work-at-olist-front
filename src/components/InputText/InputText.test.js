import React from 'react';
import { shallow, mount } from 'enzyme';

import InputText from './InputText';

describe('<InputText />', () => {
  it('Should component render value', () => {
    const value = 'add';
    const onChange = jest.fn();
    const wrapper = shallow(<InputText onChange={onChange} value={value}/>);

    expect(wrapper.find('input').props().value).toEqual(value);
  });

  it('Should component render label', () => {
    const value = 'add';
    const label = 'Nome completo';
    const onChange = jest.fn();
    const wrapper = shallow(<InputText onChange={onChange} value={value} label={label} />);

    expect(wrapper.find('.label').text()).toEqual(label);
  });

  it('Should component call onChange', () => {
    const value = 'add';
    const label = 'Nome completo';
    const onChange = jest.fn();
    const wrapper = shallow(<InputText onChange={onChange} value={value} label={label} />);
    const event = {
      preventDefault() {},
      target: { value }
    };

    wrapper.find('input').simulate('change', event);
    expect(onChange).toBeCalledWith(event);
  });
});
