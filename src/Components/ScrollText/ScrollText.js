import React from 'react';
import './ScrollText.css';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

class ScrollText extends React.Component {
  
  componentDidMount() {
    const elements = document.getElementsByClassName('scroll-text');
    elements[0].addEventListener('animationend', this.props.onSkip );
  }

  render() {
    const {film, onSkip} = this.props;
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
      <div>
        <div className="scroll-container">
          <div className="scroll-text">
            <h3>{film.title}</h3>
            <h5>EPISODE {romanNumerial[film.episode]}</h5>
            <h4>{film.text}</h4>
          </div>
        </div>
        <Button
          className='btn-skip'
          buttonText='Skip' 
          functionToFire={onSkip}
        />
      </div>
    );
  }
}

export default ScrollText;

ScrollText.propTypes = {
  film: PropTypes.object,
  onSkip: PropTypes.func
};