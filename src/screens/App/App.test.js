import { prepareComponent } from 'helpers/engine';
import App from './App';
import { mount } from 'helpers/engine';

describe('<App />', () => {
  it('Should component match snapshot', () => {
    const wrapper = mount(App);

    expect(wrapper.string).toMatchSnapshot();
  });
});
