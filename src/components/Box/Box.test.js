import React from 'react';
import { shallow, mount } from 'enzyme';

import Box from './Box';

describe('<Box />', () => {
  it('Should component render children', () => {
    const child = <div>test</div>;
    const wrapper = shallow(<Box>{child}</Box>);

    expect(wrapper.contains(child)).toBeTruthy();
  });
  it('Should component match snapshot', () => {
    const wrapper = shallow(<Box />);

    expect(wrapper).toMatchSnapshot();
  });
});
