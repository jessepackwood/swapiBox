import React from 'react'
import './Card.css'

const Card = ({title, data}) => {

  return (
    <div className='card'>
      <h2>{title}</h2>
      {data.map( (info) => {
        return <h4>{info}</h4>
      })}
    </div>
    )
}

Card.propTypes = {

}

export default Card