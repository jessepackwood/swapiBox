import React, { Component } from 'react';
import ScrollText from '../ScrollText/ScrollText';
import CardContainer from '../CardContainer/CardContainer';
import {fetchFilm} from './fetchAPI';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: '',
      favorites: [],
      film: {},
      page: 1,
      people: [],
      planets: [],
      vehicles: []
    };
  }

  async componentDidMount() {
    const film = await fetchFilm();
    this.setState({film});
  }

  setDisplay = async (type, fetchFunction) => {
    let typeState = this.state[type];
    let response;
    if (typeState.length) {
      this.setState({display: type});
    } else {
      response = await fetchFunction();
      this.setState({[type]: response, display: type});
    }
  }
    
  toggleFavorite = (cardObject) => {
    let favorites = this.state.favorites;

    const currentFavorites = 
      favorites.find(favorite => favorite.title === cardObject.title);
    if (!currentFavorites) {
      favorites.push(cardObject);
    } else {
      favorites = favorites.filter(favorite =>
        favorite.title !== cardObject.title);
    }
    this.setState({favorites});
  };

  showFavorites = () => {
    this.setState({display: 'favorites'});
  };

  onSkip = () => {
    this.setState({page: 2});
  };

  render() {
    return (
      <div className="App">
        <h1 className="App-title">SwapiBox</h1>
        <div className='App-container'>
          {this.state.page === 1 && 
            <ScrollText 
              className='scroll-text'
              film={this.state.film}
              onSkip={this.onSkip}
            />}
          {this.state.page === 2 && 
            <div>
              <Header
                buttonText=''
                setDisplay={this.setDisplay}
                showFavorites={this.showFavorites}
                favoriteCount={this.state.favorites.length}
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
          }
        </div>
      </div>
    );
  }
}

export default App;
