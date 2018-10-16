import InputText from './InputText';

const ComponentInputText = InputText('icon', {}).component;

const getDOM = (Component) => {
  Component.renderChildrenComponents();
  const html = document.createElement('div');
  html.appendChild(Component.element);
  return {
    el: html.firstElementChild,
    string: html.innerHTML,
  };
}

describe('<InputText />', () => {
  it('Should component render value', () => {
    const value = 'add';
    const onChange = jest.fn();

    const component = new ComponentInputText({ onChange });
    component.setState({ value });

    const wrapper = getDOM(component);
    expect(wrapper.el.querySelector('input').value).toEqual(value);
  });

  it('Should component render label', () => {
    const value = 'add';
    const label = 'Nome completo';
    const onChange = jest.fn();
    const component = new ComponentInputText({ onChange, label });

    const wrapper = getDOM(component);
    expect(wrapper.el.querySelector('.label').innerHTML).toEqual(label);
  });
});
