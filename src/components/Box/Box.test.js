import Box from './Box';

const ComponentBox = Box('box', {}).component;

const getDOM = (Component) => {
  Component.renderChildrenComponents();
  const html = document.createElement('div');
  html.appendChild(Component.element);
  return {
    el: html.firstElementChild,
    string: html.innerHTML,
  };
}

describe('<Box />', () => {
  it('Should component match snapshot', () => {
    const component = new ComponentBox({});
    const wrapper = getDOM(component);

    expect(wrapper.string).toMatchSnapshot();
  });
});
