import Box from './Box';
import { mount } from 'helpers/engine';

const ComponentBox = Box('box', {}).component;

describe('<Box />', () => {
  it('Should component match snapshot', () => {
    const component = new ComponentBox({});
    const wrapper = mount(component);

    expect(wrapper.string).toMatchSnapshot();
  });
});
