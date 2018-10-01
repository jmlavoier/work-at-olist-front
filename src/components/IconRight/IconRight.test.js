import React from 'react';
import { shallow } from 'enzyme';

import IconRight from './IconRight';

describe('<IconRight />', () => {
  it('Should component match snapshot', () => {
    const wrapper = shallow(<IconRight />);

    expect(wrapper).toMatchSnapshot();
  });
});
