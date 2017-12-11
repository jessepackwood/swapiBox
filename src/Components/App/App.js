import React, { Component } from 'react';
import ScrollText from '../ScrollText/ScrollText'
import CardContainer from '../CardContainer/CardContainer'
import {fetchFilm} from './fetchAPI'
import Header from '../Header/Header'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      film: {},
      favorites: [],
      display: ''
    }
  }

  async componentDidMount() {
    const film = await fetchFilm()
    this.setState({film})
  }

  setDisplay = async (type, fetchFunction) => {
    let typeState = this.state[type]
    let response
    if (typeState.length) {
      this.setState({display: type})
    } else {
      response = await fetchFunction()
      this.setState({[type]: response, display: type})
    }
  }
    
  toggleFavorite = (cardObject) => {
    let favorites = this.state.favorites;

    const currentFavorites = favorites.find(favorite => favorite.title === cardObject.title)
    if(!currentFavorites) {
      favorites.push(cardObject)
    } else {
      favorites = favorites.filter(favorite => favorite.title !== cardObject.title)
    }
    this.setState({favorites})
  }

  showFavorites = () => {
    this.setState({display: 'favorites'})
  }

  render() {
    return (
      <div className="App">
        <div className='api-data'>
          <Header
            buttonText=''
            setDisplay={this.setDisplay}
            setPlanets={this.setPlanets}
            setVehicles={this.setVehicles}
            showFavorites={this.showFavorites}
          />
                <ScrollText 
            className='scroll-text'
            film={this.state.film}
            />
          <CardContainer 
            people={this.state.people}
            planets={this.state.planets}
            vehicles={this.state.vehicles} 
            display={this.state.display}
            toggleFavorite={this.toggleFavorite}
            favorites={this.state.favorites}
          />
        </div>
      </div>
    );
  }
}

export default App;
