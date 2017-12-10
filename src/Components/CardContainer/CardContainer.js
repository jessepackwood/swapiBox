import React from 'react'
import Card from '../Card/Card'
import PropTypes from 'prop-types'
import './CardContainer.css'

const CardContainer = ({people, planets, vehicles, display, toggleFavorite, favorites}) => {

  const peopleCards = people.map((person) => {
    return {
      title: person.name,
      data: [
        `homeworld: ${person.data.homeworld}`,
        `species: ${person.data.species}`,
        `language: ${person.data.language}`,
        `population: ${person.data.population}`
        ]
    }
  })

  const planetCards = planets.map((planet)=> {
    return {
      title: planet.name,
      data: [
        `Terrain: ${planet.data.terrain}`,
        `population: ${planet.data.population}`,
        `Climate: ${planet.data.climate}`,
        `Residents: ${planet.data.residents}`
      ]
    }
  })

  const vehicleCards = vehicles.map((vehicle)=> {
    return {
      title: vehicle.name,
      data: [
        `Model: ${vehicle.data.model}`,
        `Class: ${vehicle.data.class}`,
        `Passengers: ${vehicle.data.passengers}`
      ]
    }
  })

  return (
    <div className='card-container'>
      { display === 'people' && peopleCards.map( (card, index) => 
        <Card
          key={`people ${index}`}
          object={card}
          title={card.title}
          data={card.data}
          toggleFavorite={toggleFavorite}
        />
        )
      }
      { display === 'planets' && planetCards.map( (card, index) =>
        <Card
          key={`planets ${index}`}
          object={card}
          title={card.title}
          data={card.data}
          toggleFavorite={toggleFavorite}
        />
      )
      }
      { display === 'vehicles' && vehicleCards.map( (card, index) => 
        <Card
          key={card.title}
          object={card}
          title={card.title}
          data={card.data}
          toggleFavorite={toggleFavorite}
        />
        )
      }
      { display === 'favorites' && favorites.map( (card, index) => 
        <Card
          key={card.title}
          object={card}
          title={card.title}
          data={card.data}
          toggleFavorite={toggleFavorite}
        />
        )
      }
    </div>
    )
}

CardContainer.propTypes = {
  people: PropTypes.array,
  planets: PropTypes.array,
  vehicles: PropTypes.array,
  display: PropTypes.string,
  toggleFavorite: PropTypes.func
}

export default CardContainer