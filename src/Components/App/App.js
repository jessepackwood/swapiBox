import React, { Component } from 'react';
import ScrollText from '../ScrollText/ScrollText'
import CardContainer from './CardContainer/CardContainer'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      planets: [],
      vehicles: []
    }
  }

  async componentDidMount() {

    const fetchPeople = await fetch('https://swapi.co/api/people/');
    const peopleData = await fetchPeople.json();
    const people = await this.fetchHomeworldSpecies(peopleData.results)
    this.setState({people})

    const fetchFilm = await fetch('https://swapi.co/api/films/')
    const filmData = await fetchFilm.json();
    const filmText = await this.fetchFilmText()
    }


    fetchFilmText(filmData) {
      const unresolvedPromises = filmData.map( async (film) => {
        let title = await fetch(film.title)
      })
    }

    fetchPlanets() {
      fetch('https://swapi.co/api/planets/')
      .then(res => res.json())
      .catch(error => alert(error))
    }

    fetchHomeworldSpecies(peopleData) {
      const unresolvedPromises = peopleData.map( aysnc (person) => {
        let homeworldFetch = await fetch(person.homeworld)
        let homeworldData = await homeworldFetch.json();
        let speciesFetch = await fetch(person.species);
        let speciesData = await speciesFetch.json();
        return {
          name: person.name,
          data: {
            homeworld: homeworldData.name,
            species: speciesData.name,
            language: speciesData.language,
            population: homeworldData.population
          }
        }
      })
      return Promise.all(unresolvedPromises)
    }

  render() {
    return (
      <div className="App">
        <div>
        <ScrollText className='Scroll-text'/>
        </div>
        <div>
        <header className="App-header">
          <h1 className="App-title">SwapiBox</h1>
          <button>People</button>
          <button>Planets</button>
          <button>Vehicles</button>
        </header>
        <CardContainer 
          people={this.state.people}
          planets={this.state.planets}
          vehicles={this.state.vehicles} 
        />
        </div>
      </div>
    );
  }
}

export default App;
