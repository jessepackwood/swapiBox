import React from 'react';
import './ScrollText.css'
import PropTypes from 'prop-types';

const ScrollText = ({film}) => {
  const romanNumerial = {  
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII'
  };

  return (
    <div className="scroll-container">
      <div className="scroll-text">
        <h3>{film.title}</h3>
        <h5>EPISODE {romanNumerial[film.episode]}</h5>
        <h4>{film.text}</h4>
      </div>
    </div>
  )
};

export default ScrollText;

ScrollText.propTypes = {
  film: PropTypes.object
};