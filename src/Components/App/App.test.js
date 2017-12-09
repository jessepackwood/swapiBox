import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme'
// import Adapter from '../setUpTest.js'
import App from './App';

describe('App test', () => {

it('should load scrollText on mount', async () => {
  const mockFetch = jest.fn().mockImplementation(()=> Promise.resolve({
    status: 200,
    json: ()=> Promise.resolve({
      results: [{opening_crawl: 'Star Warssss'}]
    })
  }))
  window.fetch = mockFetch
  const app = await mount(<App />)
  await app.update()
  expect(app.state('filmText')).toEqual(['Star Warssss'])
  })

  it('should load people when the people button is clicked', () => {
    
  })
})