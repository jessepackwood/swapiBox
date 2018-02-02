import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App'
import {
  fetchFilm, 
  fetchPeople, 
  fetchHomeWorldSpecies, 
  fetchPlanets, 
  fetchPlanetsData, 
  fetchvehicles
} from './fetchAPI';

  const mockFetch = jest.fn().mockImplementation(()=> Promise.resolve({
    status: 200,
    json: ()=> Promise.resolve({title: 'this is a title', episode_id: 1, opening_crawl: 'Star Wars'})
    }));

  window.fetch = mockFetch

describe('Fetch tests', () => {
  it('should have a default state', async () => {
    const app = await mount(<App />)
    const defaultState = { display: '',
      favorites: [],
      film: {},
      page: 1,
      people: [],
      planets: [],
      vehicles: [] }

    expect(app.state()).toEqual(defaultState)
  })

  it('should load scrollText on mount', async () => {


  const app = await mount(<App />)
  await app.update()

  console.log(app.instance().state);

  expect(app.state('film').text).toEqual('Star Wars');
  });

  
});
