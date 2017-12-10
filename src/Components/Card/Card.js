import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

const Card = ({object, title, data, toggleFavorite}) => {

  return (
    <div className='card'>
      <h2>{title}</h2>
      <button onClick={()=> toggleFavorite(object)} >Favorite</button>
      {data.map( (info) => {
        return <h4>{info}</h4>
      })}
    </div>
    )
}

Card.propTypes = {
  title: PropTypes.string,
  data: PropTypes.object,
  addFavorite: PropTypes.func
}

export default Card