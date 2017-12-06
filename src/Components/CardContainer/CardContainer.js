import React from 'react'
import Card from './Card/Card'

const CardContainer = ({people, planets, vehicles}) => {
  return (
    <div className='card-container'>
      <Card 
        people={people}
        planets={planets}
        vehicles={vehicles}
        />
    </div>
    )
}

CardContainer.propTypes = {

}

export default CardContainer