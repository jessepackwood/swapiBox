import React, { Component } from 'react';
import ScrollText from '../ScrollText/ScrollText'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {

    fetchFilm() {
      fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .catch(error => alert(error))
    }

    fetchPeople() {
      fetch('https://swapi.co/api/people/')
      .then(response => res.json())
      .catch(error => alert(error))
    }

    fetchPlanets() {
      fetch('https://swapi.co/api/planets/')
      .then(res => res.json())
      .catch(error => alert(error))
    }
  
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
        </div>
      </div>
    );
  }
}

export default App;
