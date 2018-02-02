import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card.js';

describe('Card tests', () => {
  let mockCard;
  let renderedCard;

  beforeEach(() => {
    mockCard = {
      title: 'Luke Skywalker',
      info: [
        Homeworld: 'Tatooine',
        Species: 'Human',
        Language: 'Intergalactic Basic',
        Population: '20000000'
      ]
    };
    renderedCard = mount(<Card object={mockCard}
                                     title='Luke Skywalker'
                                     info={mockCard.info}
                                     isFavorite={false} 
                                     />);
  });

  it('should exist', () => {
    expect(renderedCard).toBeDefined();
  });

  it('should render people when people are active', () => {

  });

  it('should render planets when planets are active', () => {

  });

  it('should render vehicles when vehicles are active', () => {

  });

  it('should become a favorite when clicked', () => {
    
  });

});