import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import App from './App';

const setUp = (props={}) => {
  const component = shallow(<App {...props} />);
  return component;
}

describe('App', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('renders without crashing', () => {});

  it('renders date selection message', () => {
    const selectDate = <h1>SELECT DATE TO SEE MARS ROVER IMAGE</h1>;
    expect(component.contains(selectDate)).toEqual(true);
  });

}); 