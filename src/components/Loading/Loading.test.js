import Loading from './Loading';
import { mount } from 'helpers/engine';

const ComponentLoading = Loading('loading', {}).component;

describe('<Loading />', () => {
  it('Should component match snapshot', () => {
    const component = new ComponentLoading({});
    const wrapper = mount(component);

    expect(wrapper.string).toMatchSnapshot();
  });
});
