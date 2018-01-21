import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/header/Header';

test('should render Header correctly', () => {
  const auth = { token: 'blah' };
  const wrapper = shallow(<Header auth={auth} />);
  expect(wrapper).toMatchSnapshot();
});
