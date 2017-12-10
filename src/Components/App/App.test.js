import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme'
import './fetchAPI'
import App from './App';

jest.mock('./fetchAPI.js');

describe('App test', () => {
  beforeEach(() => {
    window. fetch = 
    jest.fn().mockImplementation(() => Promise.resolve({
    status: 200,
    json: () => Promise.resolve(
      {opening_crawl: 'Star Warssss',

       title: 'Return of the Jedi',
     }
    )
    }))
  });
it('should load scrollText on mount', async () => {
  // const mockFetch = jest.fn().mockImplementation(() => Promise.resolve({
  //   status: 200,
  //   json: () => Promise.resolve(
  //     {opening_crawl: 'Star Warssss',

  //      title: 'Return of the Jedi',
  //    }
  //   )
  // }))
  // window.fetch = mockFetch
  const app = await shallow(<App />, {disableLifeCycleMethods: true});
  await app.update()
  expect(app.state('film').opening_crawl).toEqual('Star Warssss')
  })

  it('should load people when the people button is clicked', () => {
    
  })
});