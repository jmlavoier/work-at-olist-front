import React from 'react';
import { shallow } from 'enzyme';

import Form from './Form';
import {
  INITIAL_FIELD,
} from '../App/constants';

describe('<Form />', () => {
  it('Should component match snapshot', () => {
    const form = {
      name: INITIAL_FIELD,
      email: INITIAL_FIELD,
      password: INITIAL_FIELD,
      confirmpass: INITIAL_FIELD,
      buttonSubmit: {
        isLoading: false,
      }
    };
    const wrapper = shallow(<Form form={form} onChange={() => {}} onSubmit={() => {}} />);

    expect(wrapper).toMatchSnapshot();
  });
});
