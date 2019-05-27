import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('should render App correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('h1').text()).toBe('SELECT DATE TO SEE MARS ROVER IMAGE');
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
