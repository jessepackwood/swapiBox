import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Card from './Card.js'

describe('Card tests', () => {
  beforeEach() => {
    const card = shallow(<Card />)
  }
  it('should exist', () => {
    expect(card).toBeDefined()
  });

  it('should render people when people are active', () => {

  })

  it('should render planets when planets are active', () => {

  })

  it('should render vehicles when vehicles are active', () => {

  })

  it('should become a favorite when clicked', () => {
    
  })

})