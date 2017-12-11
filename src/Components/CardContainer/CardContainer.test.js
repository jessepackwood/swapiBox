import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer tests', () => {
  let renderedCardContainer;
  let mockCategory;
  let mockToggleFavorites;
  let mockFavorites;

  beforeEach(() => {
    renderedCardContainer = shallow(<CardContainer />);

  })
  it('should exist', () => {
    expect(renderedCardContainer).toBeDefined()
  });

  it('should match the snapshot', () => {
    expect(renderedCardContainer).toMatchSnapshot();
  });

  it('should render Cards for each object in the category', () => {
    expect(renderedCardContainer.find('Card').length).toEqual(0);

    mockCategory = [{ title: 'Luke' }, { title: 'Han Solo' }, { title: 'Ren' }];
    renderedCardContainer = shallow(<CardContainer people={mockCategory} />);

    expect(renderedCardContainer.find('Card').length).toEqual(3);
  });

  })