import Button from './Button';
import Loading from 'components/Loading';

const ComponentButton = Button('button', {}).component;
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

describe('<Button></Button>', () => {
  it('Should component render Loading', () => {
    const value = 'add';
    const onClick = jest.fn();
    const CButton = new ComponentButton({ text: value, onClick });
    const CLoading = new ComponentLoading({ text: value, onClick });

    const Btn = getDOM(CButton).el;
    const Load = getDOM(CLoading).string;

    expect(Btn.innerHTML.trim()).toEqual(Load);
  });

  it('Should component call click event', () => {
    const value = 'add';
    const onClick = jest.fn();

    const CButton = new ComponentButton({ text: value, onClick });
    const CLoading = new ComponentLoading({ text: value, onClick });

    const Btn = getDOM(CButton).el;
    Btn.click();

    expect(onClick).toHaveBeenCalled();
  });

});

