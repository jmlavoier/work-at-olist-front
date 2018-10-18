import InputText from './InputText';
import { mount } from 'helpers/engine';

const ComponentInputText = InputText('icon', {}).component;

describe('<InputText />', () => {
  it('Should component render value', () => {
    const value = 'add';
    const onChange = jest.fn();

    const component = new ComponentInputText({ onChange });
    component.setState({ value });

    const wrapper = mount(component);
    expect(wrapper.el.querySelector('input').value).toEqual(value);
  });

  it('Should component render label', () => {
    const value = 'add';
    const label = 'Nome completo';
    const onChange = jest.fn();
    const component = new ComponentInputText({ onChange, label });

    const wrapper = mount(component);
    expect(wrapper.el.querySelector('.label').innerHTML).toEqual(label);
  });
});
