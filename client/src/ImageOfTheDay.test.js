import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import ImageOfTheDay from './ImageOfTheDay';

const setUp = (props={}) => {
  const component = shallow(<ImageOfTheDay {...props} />);
  return component;
}

describe('ImageOfTheDay', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('renders without crashing', () => {
    shallow( <ImageOfTheDay /> );
  });

  it('renders four instances of the camImg class', () => {
    const wrapper = component.find('.camImg');
    expect(wrapper.length).toBe(4);
  });

});