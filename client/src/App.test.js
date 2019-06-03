import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import App from './App';
import { SingleDatePicker } from 'react-dates';
import { findByTestArr } from '../utils';

const setUp = (props={}) => {
  const component = shallow(<App {...props} />);
  return component;
}

describe('<App />', () => {

  describe('App rendering with relevant messages', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('Renders the headline message', () => {
      const selectDate = <h1>SELECT DATE TO SEE MARS ROVER IMAGE</h1>;
      expect(wrapper.contains(selectDate)).toEqual(true);
    });
    
    it('Renders the date selection form', () => {
      const component = findByTestArr(wrapper, 'form');
      expect(component.length).toBe(1);
    });

  });

  describe('Loads child components', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    
    it('Renders inital image elements', () => {
      const component = findByTestArr(wrapper, 'imageOfTheDay');
      expect(component.length).toBe(1);
    });

    it('Renders react-dates SDP', () => {
      const form = findByTestArr(wrapper, 'form');
      expect(form.find(SingleDatePicker).length).toBe(1);
    })

  })

});