import React from 'react';
import { shallow } from 'enzyme';

import Logo from './Logo';

describe('<Logo />', () => {
  it('Should component match snapshot', () => {
    const wrapper = shallow(<Logo />);

    expect(wrapper).toMatchSnapshot();
  });
});
