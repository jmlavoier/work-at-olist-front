import React from 'react';
import { shallow } from 'enzyme';

import Form from './Form';

describe('<Form />', () => {
  it('Should component match snapshot', () => {
    const wrapper = shallow(<Form />);

    expect(wrapper).toMatchSnapshot();
  });
});
