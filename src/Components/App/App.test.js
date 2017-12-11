import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme'
import {
  fetchFilm, 
  fetchPeople, 
  fetchHomeWorldSpecies, 
  fetchPlanets, 
  fetchPlanetsData, 
  fetchvehicles
} from './fetchAPI'
import App from './App';


describe('App test', () => {
  let renderedApp;
  let mockCard;

  beforeEach(() => {
    mockCard = {
      title: 'Luke Skywalker',
      info: {
        Homeworld: 'Tatooine',
        Species: 'Human',
        Language: 'Intergalactic Basic',
        Population: '20000000'
      }
    };
    renderedApp = shallow(<App />);
  });

  it('Should exist', () => {
    expect(renderedApp).toBeDefined();
  });

  it('Should match the snapshot', () => {
    expect(renderedApp).toMatchSnapshot();
  });

  it('Should only display scrollText on page load', () => {
    expect(renderedApp.state().page).toEqual(1)
    expect(renderedApp.find('.scroll-text').length).toEqual(1)

    renderedApp.instance().onSkip()
    renderedApp.update();

    expect(renderedApp.state().page).toEqual(2)
    expect(renderedApp.find('.scroll-text').length).toEqual(0)
  })

  it.skip('Should change display base on category selected', () => {
    renderedApp.instance().setDisplay('people');
    renderedApp.update();
    expect(renderedApp.state().display).toEqual('people');
  });

  it('Should add cards to favorites', () => {
    expect(renderedApp.state().favorites.length).toEqual(0);

    renderedApp.instance().toggleFavorite(mockCard);
    renderedApp.update();

    expect(renderedApp.state().favorites.length).toEqual(1);
    expect(renderedApp.state().favorites[0]).toEqual(mockCard);
  });

  it('Should remove a card from favorites', () => {
    const favorites = [mockCard];

    renderedApp.setState({ favorites });
    renderedApp.update();
    expect(renderedApp.state().favorites[0]).toEqual(mockCard);

    renderedApp.instance().toggleFavorite(mockCard);
    renderedApp.update();

    expect(renderedApp.state().favorites.length).toEqual(0);
  });
});