import React, { useEffect } from 'react'
import Card from './Card'
import uniqid from 'uniqid'

function CardBoard({ cars, handleClick }) {
  useEffect(() => {
    const divs = document.querySelectorAll('.card')
    divs.forEach((div) => {
      div.addEventListener('click', handleClick, { capture: true })
    })
  })

  return (
    <div className='cardBoard'>
      {cars.map((car) => {
        return <Card src={car.src} alt={car.alt} key={uniqid()} />
      })}
    </div>
  )
}

export default CardBoard
