import React from 'react'
import Card from '../Card/Card'
import PropTypes from 'prop-types'
import './CardContainer.css'

const CardContainer = ({people, planets, vehicles, display, addFavorite}) => {

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
        ``
      ]
    }
  })

  return (
    <div className='card-container'>
    { display === '' && 
      <div> Choose a category
      </div>
    }
    { display === 'people' && peopleCards.map( (card, index) => 
      <Card
        key={`people ${index}`}
        title={card.title}
        data={card.data}
        addFavorite={addFavorite}
      />
      )
    }
    { display === 'planets' && planetCards.map( (card, index) =>
      <Card
        key={`planets ${index}`}
        title={card.title}
        data={card.data}
        addFavorite={addFavorite}
      />
      )
    }
    { display === 'vehicles' && vehicleCards.map( (card, index) => 
      <Card
        key={`vehicles ${index}`}
        title={card.title}
        data={card.data}
        addFavorite={addFavorite}
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
  addFavorite: PropTypes.func
}

export default CardContainer