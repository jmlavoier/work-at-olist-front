import Success from './Success';
import { mount } from 'helpers/engine';

const ComponenSuccess = Success('success', {}).component;

describe('<Success />', () => {
  it('Should component match snapshot', () => {
    const component = new ComponenSuccess({});
    const wrapper = mount(component);

    expect(wrapper.string).toMatchSnapshot();
  });
});
