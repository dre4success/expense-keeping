import React from 'react';
import { shallow } from 'enzyme';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { Header } from '../../components/Header';

const user = { displayName: 'Joe' };
test('should render Header correctly', () => {
  const wrapper = shallow(
    <Header user={user.displayName} startLogout={() => {}} />
  );
  expect(wrapper).toMatchSnapshot();

  /*   const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot(); */
});

test('should call startLogout on button click', () => {
  const startLogout = jest.fn();

  const wrapper = shallow(
    <Header user={user.displayName} startLogout={startLogout} />
  );
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});
