import React from 'react'
import Card from '../Card/Card'
import './CardContainer.css'

const CardContainer = ({people, planets, vehicles, show}) => {

  const peopleCards = people.map((person) => {
    console.log(person)
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

  return (
    <div className='card-container'>
    { show === 'people' && peopleCards.map(card => 
      <Card 
        title={card.title}
        data={card.data}
      />
      )
    }
    { show === 'people' && planetCards.map(card =>
      <Card
        title={card.title}
        data={card.data}
      />
      )
    }

    </div>
    )
}

CardContainer.propTypes = {

}

export default CardContainer