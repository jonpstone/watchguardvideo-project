import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import ImageOfTheDay from './ImageOfTheDay';

describe('ImageOfTheDay', () => {

  it('renders without crashing', () => {
    shallow( <ImageOfTheDay /> );
  });

  it('renders date selection message', () => {
    const component = shallow(<ImageOfTheDay />);
    console.log(component.debug());
    const wrapper = component.find('.camImg');
    expect(wrapper.length).toBe(4);
  });

});