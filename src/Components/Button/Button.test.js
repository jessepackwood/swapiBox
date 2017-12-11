import React from 'react'
import { shallow, mount } from 'enzyme'
import Button from './Button'

describe('Button tests', () => {
  let renderedButton;
  let mockFunc;

  beforeEach(() => {
    mockFunc = jest.fn();
    renderedButton = shallow(<Button 
                                buttonText={'button'}
                                functionToFire={mockFunc} 
                              />);
  });

  it('should exist', () => {
    expect(renderedButton).toBeDefined()
  });

  it('should have the text inside the button as passed via the type prop', () => {
    const expectedButtonText = "button";
    expect(renderedButton.text()).toEqual(expectedButtonText);
  });

  it('should fire a function when clicked', () => {
    const expectedFunctionCalls = 1;

    renderedButton.simulate('click');

    expect(mockFunc.mock.calls.length).toEqual(expectedFunctionCalls);
  });
  
})