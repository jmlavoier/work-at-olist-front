import Success from './Success';

const ComponenSuccess = Success('success', {}).component;

const getDOM = (Component) => {
  Component.renderChildrenComponents();
  const html = document.createElement('div');
  html.appendChild(Component.element);
  return {
    el: html.firstElementChild,
    string: html.innerHTML,
  };
}

describe('<Success />', () => {
  it('Should component match snapshot', () => {
    const component = new ComponenSuccess({});
    const wrapper = getDOM(component);

    expect(wrapper.string).toMatchSnapshot();
  });
});
