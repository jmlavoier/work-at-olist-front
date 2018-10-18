import PasswordStrength from './PasswordStrength';
import { mount } from 'helpers/engine';

const ComponentPasswordStrength = PasswordStrength('pass', {}).component;

describe('<PasswordStrength />', () => {
  it('Should component render with default props', () => {
    const onChange = jest.fn();
    const value = '';

    const component = new ComponentPasswordStrength({ onChange, value });
    const wrapper = mount(component);

    expect(wrapper.el.querySelector('#bar1').classList.contains('gray')).toBeTruthy();
    expect(wrapper.el.querySelector('#bar2').classList.contains('gray')).toBeTruthy();
    expect(wrapper.el.querySelector('#bar3').classList.contains('gray')).toBeTruthy();
  });

  it('Should component render with all rules false', () => {
    const onChange = jest.fn();
    const value = 'x';

    const component = new ComponentPasswordStrength({ onChange, value });
    const wrapper = mount(component);

    expect(wrapper.el.querySelector('#bar1').classList.contains('gray')).toBeTruthy();
    expect(wrapper.el.querySelector('#bar2').classList.contains('gray')).toBeTruthy();
    expect(wrapper.el.querySelector('#bar3').classList.contains('gray')).toBeTruthy();
  });

  it('Should component render with only rules.hasMinChar true', () => {
    const onChange = jest.fn();
    const value = 'xxxxxx';

    const component = new ComponentPasswordStrength({ onChange, value });
    const wrapper = mount(component);

    expect(wrapper.el.querySelector('#bar1').classList.contains('red')).toBeTruthy();
    expect(wrapper.el.querySelector('#bar2').classList.contains('gray')).toBeTruthy();
    expect(wrapper.el.querySelector('#bar3').classList.contains('gray')).toBeTruthy();
  });

  it('Should component render with just rules.hasUppercase true', () => {
    const onChange = jest.fn();
    const value = 'U';

    const component = new ComponentPasswordStrength({ onChange, value });
    const wrapper = mount(component);

    expect(wrapper.el.querySelector('#bar1').classList.contains('red')).toBeTruthy();
    expect(wrapper.el.querySelector('#bar2').classList.contains('gray')).toBeTruthy();
    expect(wrapper.el.querySelector('#bar3').classList.contains('gray')).toBeTruthy();
  });

  it('Should component render with only rules.hasNumber true', () => {
    const onChange = jest.fn();
    const value = '123';

    const component = new ComponentPasswordStrength({ onChange, value });
    const wrapper = mount(component);

    expect(wrapper.el.querySelector('#bar1').classList.contains('red')).toBeTruthy();
    expect(wrapper.el.querySelector('#bar2').classList.contains('gray')).toBeTruthy();
    expect(wrapper.el.querySelector('#bar3').classList.contains('gray')).toBeTruthy();
  });

  it('Should component render with only rules.hasMinChar and rules.hasUppercase true', () => {
    const onChange = jest.fn();
    const value = 'Xxxxxx';

    const component = new ComponentPasswordStrength({ onChange, value });
    const wrapper = mount(component);

    expect(wrapper.el.querySelector('#bar1').classList.contains('yellow')).toBeTruthy();
    expect(wrapper.el.querySelector('#bar2').classList.contains('yellow')).toBeTruthy();
    expect(wrapper.el.querySelector('#bar3').classList.contains('gray')).toBeTruthy();
  });

  it('Should component render with only rules.hasNumber and rules.hasUppercase true', () => {
    const onChange = jest.fn();
    const value = '1U';

    const component = new ComponentPasswordStrength({ onChange, value });
    const wrapper = mount(component);

    expect(wrapper.el.querySelector('#bar1').classList.contains('yellow')).toBeTruthy();
    expect(wrapper.el.querySelector('#bar2').classList.contains('yellow')).toBeTruthy();
    expect(wrapper.el.querySelector('#bar3').classList.contains('gray')).toBeTruthy();
  });

  it('Should component render with only rules.hasNumber and rules.hasMinChar true', () => {
    const onChange = jest.fn();
    const value = '1xxxxx';

    const component = new ComponentPasswordStrength({ onChange, value });
    const wrapper = mount(component);

    expect(wrapper.el.querySelector('#bar1').classList.contains('yellow')).toBeTruthy();
    expect(wrapper.el.querySelector('#bar2').classList.contains('yellow')).toBeTruthy();
    expect(wrapper.el.querySelector('#bar3').classList.contains('gray')).toBeTruthy();
  });

  it('Should component render with all rules true', () => {
    const onChange = jest.fn();
    const value = '1Xxxxx';

    const component = new ComponentPasswordStrength({ onChange, value });
    const wrapper = mount(component);

    expect(wrapper.el.querySelector('#bar1').classList.contains('green')).toBeTruthy();
    expect(wrapper.el.querySelector('#bar2').classList.contains('green')).toBeTruthy();
    expect(wrapper.el.querySelector('#bar3').classList.contains('green')).toBeTruthy();
  });
});
