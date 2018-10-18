import Button from './Button';
import Loading from 'components/Loading';
import { mount } from 'helpers/engine';

const ComponentButton = Button('button', {}).component;
const ComponentLoading = Loading('loading', {}).component;

describe('<Button></Button>', () => {
  it('Should component render description', () => {
    const value = 'add';
    const onClick = jest.fn();
    const CButton = new ComponentButton({ text: value, onClick });
    const CLoading = new ComponentLoading({ text: value, onClick });

    const Btn = mount(CButton).el;
    const Load = mount(CLoading).string;

    expect(Btn.querySelector('#description').innerHTML).toEqual('Criar conta');
  });

  it('Should component render Loading', () => {
    const value = 'add';
    const onClick = jest.fn();
    const CButton = new ComponentButton({ text: value, onClick, isLoading: true });
    const CLoading = new ComponentLoading({ text: value, onClick });

    const Btn = mount(CButton).el;
    const Load = mount(CLoading).string;

    expect(Btn.querySelector('#description').innerHTML).toEqual('Criar conta');
  });

  it('Should component call click event', () => {
    const value = 'add';
    const onClick = jest.fn();

    const CButton = new ComponentButton({ text: value, onClick });
    const CLoading = new ComponentLoading({ text: value, onClick });

    const Btn = mount(CButton).el;
    Btn.click();

    expect(onClick).toHaveBeenCalled();
  });

});

