import React from 'react'
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Button.scss'

const Button = ({functionToFire, buttonText}) => {
  return(
    <button onClick={functionToFire}>{buttonText}</button>
  )
}

Button.propTypes = {
  
}

export default Button