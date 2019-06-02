import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ImageOfTheDay from './ImageOfTheDay';

describe('ImageOfTheDay', () => {

  it('Renders without crashing', () => {
    shallow( <ImageOfTheDay /> );
  });

  it('Renders four image elements', () => {
    const component = shallow(<ImageOfTheDay />);
    const wrapper = component.find('.camImg');
    expect(wrapper.length).toBe(4);
  });
  
});