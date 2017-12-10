import React from 'react'
import './ScrollText.css'
import PropTypes from 'prop-types'
import Crawl from 'react-star-wars-crawl'


const ScrollText = ({filmText}) => {
  return (
    <div className='scroll-text'>
    <Crawl
      title="Episode IV"
      subTitle="A New Hope"
      text={filmText}
    />
    </div>
  )
}

ScrollText.propTypes = {
  filmText: PropTypes.bool
}

export default ScrollText