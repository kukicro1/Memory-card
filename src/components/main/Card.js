import React from 'react'

function Card({ src, alt }) {
  return (
    <div className='card' id={alt}>
      <img src={src} alt={alt} id={alt} />
      <div className='cardText'>{alt}</div>
    </div>
  )
}

export default Card
