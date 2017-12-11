import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

const Card = ({object, toggleFavorite, isFavorite}) => {
  return (
    <div className={`card ${isFavorite && 'favorite'}`}>
      <h2>{object.title}</h2>
      {object.info.map( (info, index) => {
        return <h4 key={`info-${index}`}>{info}</h4>
      })}
      <button className='favorite-btn' onClick={()=> toggleFavorite(object)} >Favorite</button>
    </div>
    )
}

Card.propTypes = {
  title: PropTypes.string,
  data: PropTypes.object,
  addFavorite: PropTypes.func
}

export default Card