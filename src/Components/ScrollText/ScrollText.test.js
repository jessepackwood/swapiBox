import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import ScrollText from './ScrollText.js'

describe('ScrollText tests', () => {
  beforeEach() => {
    const scrollText = shallow(<ScrollText />)
  }
  });