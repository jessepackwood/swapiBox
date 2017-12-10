import React, { Component } from 'react';
import ScrollText from '../ScrollText/ScrollText'
import CardContainer from '../CardContainer/CardContainer'
import Header from '../Header/Header'
import {fetchFilm, fetchPeople, fetchVehicles, fetchPlanets} from './fetchAPI'
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

  setPeople = async () => {
    if(this.state.people.length) {
      this.setState({ display: 'people'} )
      } 
      else {
      const people = await fetchPeople();
      this.setState({people, display: 'people'})
      }
  }

  setPlanets = async () => {
    if(this.state.planets.length) {
      this.setState({ display: 'planets'} )
    } 
    else {
      const planets = await fetchPlanets()
      this.setState({planets, display: 'planets'})
    }
  }

  setVehicles = async () => {
    if(this.state.vehicles.length) {
      this.setState({ display: 'vehicles'} )
    } 
    else {
      const vehicles = await fetchVehicles()
      this.setState({vehicles, display: 'vehicles'})
    }
  }

  // fetchVehicles = async () => {
  //   const fetchvehicles = await fetch('https://swapi.co/api/vehicles/')
  //   const vehicleObj = await fetchvehicles.json()
  //   const vehicles = vehicleObj.results.map( vehicle => {
  //     return {
  //       name: vehicle.name,
  //       info: {
  //         model: vehicle.model,
  //         class: vehicle.vehicle_class,
  //         passengers: vehicle.passengers
  //       }
  //     }
  //   })
  //   this.setState({vehicles, display: 'vehicles'})
  //   return vehicles
  // }
    
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
            setPeople={this.setPeople}
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
