import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import Header from './Header.js'

describe('Header tests', () => {
  let renderedHeader;

  beforeEach(() => {
    renderedHeader = shallow(<Header />);
  });

  it('should exist', () => {
    expect(renderedHeader).toBeDefined();
  })

  it('should receive props', () => {
    renderedHeader = mount(<Header favoriteCount={3} />);
    expect(renderedHeader.props().favoriteCount).toEqual(3);
  });

  it('should match the snapshot', () => {
    expect(renderedHeader).toMatchSnapshot();
  });
});