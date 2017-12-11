import React from 'react'
import PropTypes from 'prop-types';
import './Button.css'

const Button = ({functionToFire, buttonText, count}) => {
  return (
    <button 
      className="nav-buttons"
      onClick={functionToFire}>
      <span>{buttonText}</span>
      {!!count && <span className='btn-count'>{`:${count}`}</span>}
    </button>
  )
}

Button.propTypes = {
  functionToFire: PropTypes.func,
  buttonText: PropTypes.string
}

export default Button