import React from 'react'
import Button from '../Button/Button'
import PropTypes from 'prop-types'
import {fetchPeople, fetchVehicles, fetchPlanets} from '../App/fetchAPI'
import './Header.css'

const Header = ({buttonText, setDisplay, showFavorites, favoriteCount}) => {
  return (
    <div className="App-header">
      
      <div className='buttons'>
        <Button
          buttonText={'People'}  
          functionToFire={() => setDisplay('people', fetchPeople)} 
        />
        <Button 
          buttonText={'Planets'}
          functionToFire={() => setDisplay('planets', fetchPlanets)} 
        />
        <Button
          buttonText={'Vehicles'}
          functionToFire={() => setDisplay('vehicles', fetchVehicles)}
        />
        <Button
          buttonText={'Favorites'}
          functionToFire={showFavorites}
          count={favoriteCount}
        />
      </div>
    </div>
  )
}

Header.propTypes = {
  buttonText: PropTypes.string,
  setPeople: PropTypes.func,
  setPlanets: PropTypes.func,
  setVehicles: PropTypes.func,
  showFavorites: PropTypes.func
}

export default Header