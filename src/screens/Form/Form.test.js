import Form from './Form';

const ComponentForm = Form('app', {}).component;

console.log(ComponentForm);

const getDOM = (Component) => {
  Component.renderChildrenComponents();
  const html = document.createElement('div');
  html.appendChild(Component.element);
  return {
    el: html.firstElementChild,
    string: html.innerHTML,
  };
}

describe('<Form />', () => {
  it('Should component match snapshot', () => {

    const component = new ComponentForm('form', {});
    const wrapper = getDOM(component);

    expect(wrapper.string).toMatchSnapshot();
  });
});
