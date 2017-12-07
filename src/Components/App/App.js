import React, { Component } from 'react';
import ScrollText from '../ScrollText/ScrollText'
import CardContainer from '../CardContainer/CardContainer'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      filmText: [],
      show: 'people'
    }
  }

  async componentDidMount() {
    const fetchFilm = await fetch('https://swapi.co/api/films/')
    const filmData = await fetchFilm.json();
    const filmText = this.fetchFilmText(filmData.results)
    this.setState({filmText})

    const fetchPeople = await fetch('https://swapi.co/api/people/');
    const peopleData = await fetchPeople.json();
    console.log(peopleData)
    const people = await this.fetchHomeworldSpecies(peopleData.results)
    this.setState({people})

    const fetchPlanets = await fetch('https://swapi.co/api/planets/')
    const planetResponse = await fetchPlanets.json()
    const planets = await this.fetchPlanetsData(planetResponse.results)
    this.setState({planets})
    }


    fetchFilmText(filmData) {
      return filmData.map( (film) => {
        return film.opening_crawl
      })
    }

    fetchPlanetsData(planets) {
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

    fetchHomeworldSpecies(peopleData) {
      console.log(peopleData)
      const unresolvedPromises = peopleData.map( async (person) => {
        let homeworldFetch = await fetch(person.homeworld)
        let homeworldData = await homeworldFetch.json();
        let speciesFetch = await fetch(person.species);
        let speciesData = await speciesFetch.json();
        // debugger
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
      console.log(unresolvedPromises)
      return Promise.all(unresolvedPromises)
    }

  render() {
    return (
      <div className="App">
        <div>
        <header className="App-header">
          <h1 className="App-title">SwapiBox</h1>
          <button>People</button>
          <button>Planets</button>
          <button>Vehicles</button>
        </header>
        <ScrollText 
          className='Scroll-text'
          filmText={this.state.filmText.length > 0 && this.state.filmText[0]}/>
        <CardContainer 
          people={this.state.people}
          planets={this.state.planets}
          vehicles={this.state.vehicles} 
          show={this.state.show}
        />
        </div>
      </div>
    );
  }
}

export default App;
