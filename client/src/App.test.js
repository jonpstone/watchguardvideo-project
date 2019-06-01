import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders date selection message', () => {
  const wrapper = shallow(<App />);
  const selectDate = <h1>SELECT DATE TO SEE MARS ROVER IMAGE</h1>;
  // expect(wrapper.contains(selectDate)).toBe(true);
  expect(wrapper.contains(selectDate)).toEqual(true);
});