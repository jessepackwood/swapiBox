import React from 'react'
import Button from '../Button/Button'
import PropTypes from 'prop-types'
import './Header.css'

const Header = ({buttonText, setPeople, setPlanets, fetchVehicles, showFavorites}) => {
  return (
    <div className="App-header">
      <h1 className="App-title">SwapiBox</h1>
      <div className='buttons'>
        <Button
          buttonText={'People'}  
          functionToFire={setPeople} 
        />
        <Button 
          buttonText={'Planets'}
          functionToFire={setPlanets} 
        />
        <Button
          buttonText={'Vehicles'}
          functionToFire={fetchVehicles} 
        />
        <Button
          buttonText={'Favorites'}
          functionToFire={showFavorites}
        />
      </div>
    </div>
  )
}

Header.propTypes = {
  buttonText: PropTypes.string,
  setPeople: PropTypes.func,
  setPlanets: PropTypes.func,
  fetchVehicles: PropTypes.func,
  showFavorites: PropTypes.func
}

export default Header