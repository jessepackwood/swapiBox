import React from 'react'
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Button.css'

const Button = ({functionToFire, buttonText}) => {
  return(
    <button 
      className="nav-buttons"
      onClick={functionToFire}>{buttonText}
    </button>
  )
}

Button.propTypes = {
  functionToFire: PropTypes.func,
  buttonText: PropTypes.string
}

export default Button