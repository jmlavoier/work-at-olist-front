import { prepareComponent } from 'helpers/engine';
import App from './App';

const ComponentApp = prepareComponent(App)('app', {}).component;

const getDOM = (Component) => {
  Component.renderChildrenComponents();
  const html = document.createElement('div');
  html.appendChild(Component.element);
  return {
    el: html.firstElementChild,
    string: html.innerHTML,
  };
}

describe('<App />', () => {
  it('Should component match snapshot', () => {
    const wrapper = getDOM(ComponentApp);

    expect(wrapper.string).toMatchSnapshot();
  });
});
