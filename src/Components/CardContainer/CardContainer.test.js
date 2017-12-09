import React from 'react'
import { shallow, mount } from 'enzyme'

describe('CardContainer tests', () => {
  it('should exist', () => {
    expect(CardContainer).toBeDefined()
  });

  it('should have cards', () => {
    expect(CardContainer.find('Card'))
  })

  it('should have 10 cards', () => {
    expect(CardContainer.find('Card').length).toEqual(10)
  })