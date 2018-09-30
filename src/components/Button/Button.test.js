import React from 'react';
import { shallow, mount } from 'enzyme';

import Button from './Button';
import Loading from 'components/Loading';

describe('<Button></Button>', () => {
  it('Should component render children', () => {
    const value = 'add';
    const onClick = jest.fn();
    const wrapper = shallow(<Button onClick={onClick}>{value}</Button>);

    expect(wrapper.text()).toEqual(value);
  });

  it('Should component call click event', () => {
    const value = 'add';
    const onClick = jest.fn();
    const wrapper = shallow(<Button onClick={onClick}>{value}</Button>);

    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('Should component call render loading', () => {
    const value = 'add';
    const onClick = jest.fn();
    const wrapper = shallow(<Button onClick={onClick} isLoading>{value}</Button>);

    expect(wrapper.children().matchesElement(<Loading />)).toBeTruthy();
  });

});

