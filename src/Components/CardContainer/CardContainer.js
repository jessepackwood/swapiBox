import React from 'react'
import Card from '../Card/Card'
import PropTypes from 'prop-types'
import './CardContainer.css'

const CardContainer = ({people, planets, vehicles, display, toggleFavorite, favorites}) => {

  const toggleFavKey = (card) => favorites.map((f) => f.title).includes(card.title)

  const peopleCards = people.map((person) => {
    return {
      title: person.name,
      info: [
        `Homeworld: ${person.info.homeworld}`,
        `Species: ${person.info.species}`,
        `Language: ${person.info.language}`,
        `Population: ${person.info.population}`
        ]
    }
  })

  const planetCards = planets.map((planet)=> {
    return {
      title: planet.name,
      info: [
        `Terrain: ${planet.info.terrain}`,
        `Population: ${planet.info.population}`,
        `Climate: ${planet.info.climate}`,
        `Residents: ${planet.info.residents}`
      ]
    }
  })

  const vehicleCards = vehicles.map((vehicle)=> {
    return {
      title: vehicle.name,
      info: [
        `Model: ${vehicle.info.model}`,
        `Class: ${vehicle.info.class}`,
        `Passengers: ${vehicle.info.passengers}`
      ]
    }
  })

  return (
    <div className='card-container'>
      { display === '' &&
        <div>
          <h2 className='category-title'>Choose A Category</h2>
        </div>
      }
      { display && 
        <h2 className='category-title'>{display}</h2> 
      }
      <div className='category'>
      { display === 'people' && peopleCards.map( (card, index) => 
        <Card
          key={`person-${index}`}
          object={card}
          title={card.title}
          info={card.info}
          toggleFavorite={toggleFavorite}
          isFavorite={toggleFavKey(card)}
        />
        )
      }
      { display === 'planets' && planetCards.map( (card, index) =>
        <Card
          key={`planet-${index}`}
          object={card}
          toggleFavorite={toggleFavorite}
          isFavorite={toggleFavKey(card)}
        />
      )
      }
      { display === 'vehicles' && vehicleCards.map( (card, index) => 
        <Card
          key={`vehicles-${index}`}
          object={card}
          toggleFavorite={toggleFavorite}
          isFavorite={toggleFavKey(card)}
        />
        )
      }
      { display === 'favorites' && favorites.map( (card, index) => 
        <Card
          key={`favorites-${index}`}
          object={card}
          toggleFavorite={toggleFavorite}
          isFavorite={toggleFavKey(card)}
        />
        )
      }
      </div>
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