import React, { Component } from 'react';
import ScrollText from '../ScrollText/ScrollText'
import CardContainer from '../CardContainer/CardContainer'
import Button from '../Button/Button'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      filmText: [],
      favorites: [],
      display: ''
    }
  }

  async componentDidMount() {
    const fetchFilm = await fetch('https://swapi.co/api/films/')
    const filmData = await fetchFilm.json();
    const filmText = this.fetchFilmText(filmData.results)
    this.setState({filmText})
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

    fetchPeople = async () => {
      const fetchPeople = await fetch('https://swapi.co/api/people/');
      const peopleData = await fetchPeople.json();
      const people = await this.fetchHomeworldSpecies(peopleData.results)
      this.setState({people, display: 'people'})
    }

    fetchPlanets = async () => {
      const fetchPlanets = await fetch('https://swapi.co/api/planets/')
      const planetResponse = await fetchPlanets.json()
      const planets = await this.fetchPlanetsData(planetResponse.results)
      this.setState({planets})
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
    
  addFavorite() {
    
  }

  showFavorites() {
    console.log(this.state.favorites)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SwapiBox</h1>
          <Button
            buttonText={'People'} 
            functionToFire={this.fetchPeople}/>
          <Button 
            buttonText={'Planets'}
            functionToFire={this.fetchPlanets}/>
          <Button
            buttonText={'Vehicles'}
            functionToFire={this.fetchVehicles}/>
          <Button
            buttonText={'Favorites'}
            functionToFire={this.showFavorites}
        </header>
        <div className='api-data'>
        <ScrollText 
          className='scroll-text'
          filmText={this.state.filmText.length > 0 && this.state.filmText[0]}/>
        <CardContainer 
          people={this.state.people}
          planets={this.state.planets}
          vehicles={this.state.vehicles} 
          display={this.state.display}
          addFavorite={this.addFavorite}
        />
        </div>
      </div>
    );
  }
}

export default App;
