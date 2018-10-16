import { prepareComponent } from 'helpers/engine';
import App from './App';

describe('<App />', () => {
  it('Should component match snapshot', () => {
    const wrapper = getDOM(App);

    expect(wrapper.string).toMatchSnapshot();
  });
});
