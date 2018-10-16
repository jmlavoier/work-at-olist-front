import Logo from './Logo';

describe('<Logo />', () => {
  it('Should component match snapshot', () => {
    const wrapper = Logo();

    expect(wrapper).toMatchSnapshot();
  });
});
