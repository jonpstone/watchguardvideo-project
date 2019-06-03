import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ImageOfTheDay from './ImageOfTheDay';

describe('<ImageOfTheDay />', () => {

  describe('Mount success', () => {

    it('Renders without crashing', () => {
      shallow( <LazyLoadImage /> );
    });

  });
  
});