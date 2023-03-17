import React from 'react'

function Card() {
  return (
    <div className='card'>
      <img
        src={require('/home/kuki/Desktop/odin/odin/memory_card/src/images/Ferrari.jpg')}
        alt='Ferrari'
      />
      <div className='cardText'>Ferrari</div>
    </div>
  )
}

export default Card
