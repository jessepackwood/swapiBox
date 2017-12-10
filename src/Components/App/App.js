import React, { Component } from 'react';
import ScrollText from '../ScrollText/ScrollText'
import CardContainer from '../CardContainer/CardContainer'
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
    const film = await this.fetchFilm()

    this.setState({film})
    console.log(this.state.film)
  }

  fetchFilm = async () => {
    const randomFilm = Math.floor(Math.random() * (7) + 1);
    const filmCrawl = await fetch(`https://swapi.co/api/films/${randomFilm}/`);
    const filmData = await filmCrawl.json();
    return Object.assign({}, {title: filmData.title}, {episode: filmData.episode_id}, {text: filmData.opening_crawl})
  }

  fetchPeople = async () => {
    const fetchPeople = await fetch('https://swapi.co/api/people/');
    const peopleData = await fetchPeople.json();
    const people = await this.fetchHomeworldSpecies(peopleData.results)
    this.setState({people, display: 'people'})
  }

  fetchHomeworldSpecies(peopleData) {
    const unresolvedPromises = peopleData.map( async (person) => {
      let homeworldFetch = await fetch(person.homeworld)
      let homeworldData = await homeworldFetch.json();
      let speciesFetch = await fetch(person.species);
      let speciesData = await speciesFetch.json();
      return {
        name: person.name,
        data: {
          homeworld: homeworldData.name,
          species: speciesData.classification,
          language: speciesData.language,
          population: homeworldData.population
        }
      }
    })
    return Promise.all(unresolvedPromises)
  }

  fetchPlanets = async () => {
    const fetchPlanets = await fetch('https://swapi.co/api/planets/')
    const planetResponse = await fetchPlanets.json()
    const planets = await this.fetchPlanetsData(planetResponse.results)

    this.setState({planets, display: 'planets'})
  }

  fetchPlanetsData = (planets) => {
    const planetsPromises = planets.map( async (planet) => {
      const residentsPromises = planet.residents.map( async (resident) => { 
        const residentData = await fetch(resident);
        const residentObject = await residentData.json();
        return residentObject.name
      });
      const residentNames = await Promise.all(residentsPromises);

      return {
        name: planet.name,
        data: {
          terrain: planet.terrain,
          population: planet.population,
          climate: planet.climate,
          residents: residentNames
        }
      }
    })

    return Promise.all(planetsPromises)
  }

  fetchVehicles = async () => {
    const fetchvehicles = await fetch('https://swapi.co/api/vehicles/')
    const vehicleObj = await fetchvehicles.json()
    const vehicles = vehicleObj.results.map( vehicle => {
      return {
        name: vehicle.name,
        data: {
          model: vehicle.model,
          class: vehicle.vehicle_class,
          passengers: vehicle.passengers
        }
      }
    })
    this.setState({vehicles, display: 'vehicles'})
    return vehicles
  }
    
  addFavorite() {
    
  }

  showFavorites() {
    console.log(this.state.favorites)
  }

  render() {
    return (
      <div className="App">
        <Header
          buttonText=''
          fetchPeople={this.fetchPeople}
          fetchPlanets={this.fetchPlanets}
          fetchVehicles={this.fetchVehicles}
        />
        <div className='api-data'>
          <ScrollText 
            className='scroll-text'
            film={this.state.film}/>
          <CardContainer 
            people={this.state.people}
            planets={this.state.planets}
            vehicles={this.state.vehicles} 
            display={this.state.display}
            // addFavorite={this.addFavorite}
          />
        </div>
      </div>
    );
  }
}

export default App;
