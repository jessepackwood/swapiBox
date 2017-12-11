import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import ScrollText from './ScrollText.js'

describe('ScrollText tests', () => {
  let renderedScroll;
  let mockScroll;

  beforeEach(() => {
    mockScroll = {
      title: 'Star Wars',
      episode: 1,
      text: 'Scrolling'
    };
    renderedScroll = shallow(<ScrollText film={mockScroll} />);
  });

  it('Should exist', () => {
    expect(renderedScroll).toBeDefined();
  });

  it('Should match the snapshot', () => {
    expect(renderedScroll).toMatchSnapshot();
  });

  it('Should convert the episode number to a Roman numeral', () => {
    const mockEpisode = renderedScroll.find('h5').first();
    const expectedText = 'EPISODE I';

    expect(mockEpisode.text()).toEqual(expectedText);
  });


  });