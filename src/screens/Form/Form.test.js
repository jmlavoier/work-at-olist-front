import Form from './Form';
import { mount } from 'helpers/engine';

const ComponentForm = Form('app', {}).component;

describe('<Form />', () => {
  it('Should component match snapshot', () => {

    const component = new ComponentForm('form', {});
    const wrapper = mount(component);

    expect(wrapper.string).toMatchSnapshot();
  });
});
