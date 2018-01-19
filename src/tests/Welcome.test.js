import React from 'react';
import { shallow } from 'enzyme';
import Welcome from '../components/welcome/Welcome';

it('Welcome.js renders welcome', () => {
  const wrapper = shallow(<Welcome />);
  const welcome = <h1>Welcome</h1>;

  expect(wrapper.contains(welcome)).toEqual(true);
});
