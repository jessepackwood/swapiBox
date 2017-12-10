import React, { Component } from 'react';
import ScrollText from '../ScrollText/ScrollText'
import CardContainer from '../CardContainer/CardContainer'
import Header from '../Header/Header'
import {fetchFilm, fetchPeople, fetchVehicles, fetchPlanets, fetchHomeworldSpecies} from './fetchAPI'
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


  // fetchFilm = async () => {
  //   const randomFilm = Math.floor(Math.random() * (7) + 1);
  //   const filmCrawl = await fetch(`https://swapi.co/api/films/${randomFilm}/`);
  //   const filmData = await filmCrawl.json();
  //   return Object.assign(
  //     {},
  //     {title: filmData.title},
  //     {episode: filmData.episode_id},
  //     {text: filmData.opening_crawl}
  //     )
  // }

  // fetchPeople = async () => {
  //   const fetchPeople = await fetch('https://swapi.co/api/people/');
  //   const peopleData = await fetchPeople.json();
  //   const people = await this.fetchHomeworldSpecies(peopleData.results)
  //   this.setState({people, display: 'people'})
  // }

  // fetchHomeworldSpecies(peopleData) {
  //   const unresolvedPromises = peopleData.map( async (person) => {
  //     let homeworldFetch = await fetch(person.homeworld)
  //     let homeworldData = await homeworldFetch.json();
  //     let speciesFetch = await fetch(person.species);
  //     let speciesData = await speciesFetch.json();
  //     return {
  //       name: person.name,
  //       info: {
  //         homeworld: homeworldData.name,
  //         species: speciesData.classification,
  //         language: speciesData.language,
  //         population: homeworldData.population
  //       }
  //     }
  //   })
  //   return Promise.all(unresolvedPromises)
  // }

  // fetchPlanets = async () => {
  //   const fetchPlanets = await fetch('https://swapi.co/api/planets/')
  //   const planetResponse = await fetchPlanets.json()
  //   const planets = await this.fetchPlanetsData(planetResponse.results)

  //   this.setState({planets, display: 'planets'})
  // }

  // fetchPlanetsData = (planets) => {
  //   const planetsPromises = planets.map( async (planet) => {
  //     const residentsPromises = planet.residents.map( async (resident) => { 
  //       const residentData = await fetch(resident);
  //       const residentObject = await residentData.json();
  //       return residentObject.name
  //     });
  //     let residentNames = await Promise.all(residentsPromises);
  //     residentNames = !residentNames.length ? 'none' : residentNames

  //     return {
  //       name: planet.name,
  //       info: {
  //         terrain: planet.terrain,
  //         population: planet.population,
  //         climate: planet.climate,
  //         residents: residentNames
  //       }
  //     }
  //   })

  //   return Promise.all(planetsPromises)
  // }

  fetchVehicles = async () => {
    const fetchvehicles = await fetch('https://swapi.co/api/vehicles/')
    const vehicleObj = await fetchvehicles.json()
    const vehicles = vehicleObj.results.map( vehicle => {
      return {
        name: vehicle.name,
        info: {
          model: vehicle.model,
          class: vehicle.vehicle_class,
          passengers: vehicle.passengers
        }
      }
    })
    this.setState({vehicles, display: 'vehicles'})
    return vehicles
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
            setPeople={this.setPeople}
            setPlanets={this.setPlanets}
            fetchVehicles={this.fetchVehicles}
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
