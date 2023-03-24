import React from 'react'
import Card from './Card'

function CardBoard({ cars, handleClick }) {
  return (
    <div className='cardBoard'>
      {cars.map((car) => {
        return (
          <Card
            src={car.src}
            handleClick={handleClick}
            alt={car.alt}
            key={car.alt}
          />
        )
      })}
    </div>
  )
}

export default CardBoard
