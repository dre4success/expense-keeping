import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render LoginPage correctly', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
  const startLogin = jest.fn();

  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper
    .find('button')
    .at(0)
    .simulate('click');
  expect(startLogin).toHaveBeenCalled();
});

test('shoulc call loginWithFacebook on button click', () => {
  const loginWithFacebook = jest.fn();
  const wrapper = shallow(<LoginPage loginWithFacebook={loginWithFacebook} />);
  wrapper
    .find('button')
    .at(1)
    .simulate('click');
  expect(loginWithFacebook).toHaveBeenCalled();
});
