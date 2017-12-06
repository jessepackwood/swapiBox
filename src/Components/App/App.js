import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {

  }

  fetchFilm() {
    fetch('https://swapi.co/api/films/')
    .then(response => response.json())
  }

  fetchPeople() {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SwapiBox</h1>
          <button>People</button>
          <button>Planets</button>
          <button>Vehicles</button>
        </header>

      </div>
    );
  }
}

export default App;
