import Loading from './Loading';

const ComponentLoading = Loading('loading', {}).component;

const getDOM = (Component) => {
  Component.renderChildrenComponents();
  const html = document.createElement('div');
  html.appendChild(Component.element);
  return {
    el: html.firstElementChild,
    string: html.innerHTML,
  };
}

describe('<Loading />', () => {
  it('Should component match snapshot', () => {
    const component = new ComponentLoading({});
    const wrapper = getDOM(component);

    expect(wrapper.string).toMatchSnapshot();
  });
});
