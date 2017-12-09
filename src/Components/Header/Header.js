import React from 'react'
import Button from '../Button/Button'

const Header = ({buttonText, fetchPeople, fetchPlanets, fetchVehicles, showFavorites}) => {
  return(
       <div className="App-header">
          <h1 className="App-title">SwapiBox</h1>
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
      )
    }

Header.propTypes = {

}

export default Header