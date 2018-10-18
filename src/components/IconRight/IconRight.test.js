import IconRight from './IconRight';


describe('<IconRight />', () => {
  it('Should component match snapshot', () => {
    const wrapper = IconRight();

    expect(wrapper).toMatchSnapshot();
  });
});
