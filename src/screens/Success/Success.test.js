import React from 'react';
import { shallow } from 'enzyme';

import Success from './Success';

describe('<Success />', () => {
  it('Should component match snapshot', () => {
    const wrapper = shallow(<Success />);

    expect(wrapper).toMatchSnapshot();
  });
});
