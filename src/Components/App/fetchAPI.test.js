import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import {
  fetchFilm, 
  fetchPeople, 
  fetchHomeWorldSpecies, 
  fetchPlanets, 
  fetchPlanetsData, 
  fetchvehicles
} from './fetchAPI';

describe('Fetch tests', () => {
  
})

 // it('should load scrollText on mount', async () => {
//   const mockFetch = jest.fn().mockImplementation(()=> Promise.resolve({
//     status: 200,
//     json: ()=> Promise.resolve(results: {title: title, episode: episode, text: 'Star Wars'})
//     })
// }))
//   window.fetch = mockFetch
//   const app = await mount(<App />)
//   await app.update()
//   expect(app.state('film').text).toEqual('Star Wars')
  // }