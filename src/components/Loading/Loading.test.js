import Loading from './Loading';

describe('<Loading />', () => {
  it('Should component match snapshot', () => {
    const wrapper = Loading();

    expect(wrapper).toMatchSnapshot();
  });
});
