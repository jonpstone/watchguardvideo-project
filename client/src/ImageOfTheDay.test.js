import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import { Image, Modal } from 'semantic-ui-react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ImageOfTheDay from './ImageOfTheDay';

describe('<ImageOfTheDay />', () => {

  describe('Mount success', () => {

    it('Renders lazy loader without crashing', () => {
      shallow( <LazyLoadImage /> );
    });

    it('Renders modal without crashing', () => {
      shallow( <Modal />);
    });

  });
  
});