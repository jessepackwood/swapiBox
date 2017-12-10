import React from 'react'
import Button from '../Button/Button'
import './Header.css'

const Header = ({buttonText, fetchPeople, fetchPlanets, fetchVehicles, showFavorites}) => {
  return(
       <div className="App-header">
          <h1 className="App-title">SwapiBox</h1>
          <div className='buttons'>
          <Button
            buttonText={'People'}  
            functionToFire={fetchPeople} 
          />
          <Button 
            buttonText={'Planets'}
            functionToFire={fetchPlanets} 
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

}

export default Header