import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ImageOfTheDay from './ImageOfTheDay';

describe('<ImageOfTheDay />', () => {

  describe('Mount success', () => {

    it('Renders without crashing', () => {
      shallow( <ImageOfTheDay /> );
    });

    it('Renders four image elements', () => {
      const component = shallow(<ImageOfTheDay />);
      const wrapper = component.find('.camImg');
      expect(wrapper.length).toBe(4);
    });   

  });

  describe('Testing for props', () => {

    const setUp = (props={}) => {
      const component = shallow(<ImageOfTheDay {...props} />);
      return component;
    }

    let wrapper;
    beforeEach(() => {
      const props = {
        CameraOne: '/david_dance_800',
      }
    })
    
    it('Images are rendering when props have url provided', () => {
        const lazyComponent = shallow(<LazyLoadImage />);
        expect(lazyComponent.find("CameraOne").prop("src")).toEqual('/david_dance_800');
    });

  });

  
});