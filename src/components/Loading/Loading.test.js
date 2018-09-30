import React from 'react';
import { shallow, mount } from 'enzyme';

import Loading from './Loading';

describe('<Loading />', () => {
  it('Should component match snapshot', () => {
    const wrapper = shallow(<Loading />);

    expect(wrapper).toMatchSnapshot();
  });
});
