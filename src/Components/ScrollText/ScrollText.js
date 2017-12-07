import React from 'react'
import './ScrollText.css'
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

export default ScrollText