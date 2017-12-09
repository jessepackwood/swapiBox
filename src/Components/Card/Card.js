import React from 'react'
import './Card.css'

const Card = ({title, data, addFavorite}) => {

  return (
    <div className='card'>
      <h2>{title}</h2>
      <button onCLick={addFavorite} >Favorite</button>
      {data.map( (info) => {
        return <h4>{info}</h4>
      })}
    </div>
    )
}

Card.propTypes = {

}

export default Card