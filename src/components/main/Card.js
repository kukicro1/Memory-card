import React from 'react'

function Card({ src, alt, handleClick }) {
  return (
    <div className='card' onClick={() => handleClick(alt)}>
      <img src={src} alt={alt} />
      <div className='cardText'>{alt}</div>
    </div>
  )
}

export default Card
