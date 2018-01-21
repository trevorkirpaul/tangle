import React from 'react';
import { shallow } from 'enzyme';
import { SignInForm } from '../../components/signIn/SignInForm';
import { capFirstLetter } from '../../components/signIn/SignInForm';

test('should render container correctly', () => {
  const wrapper = shallow(<SignInForm />);
  expect(wrapper).toMatchSnapshot();
});

// helper function in SignInForm
test('should capitalize first letter in a given string', () => {
  const string = 'word';
  expect(capFirstLetter(string)).toEqual('Word');
});
