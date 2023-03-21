import React from 'react'

function Counter({ currentScore, bestScore }) {
  return (
    <div className='counter'>
      <div>
        <p>Current Score:</p>
        <p>{currentScore}</p>
      </div>
      <div>
        <p>Best Score:</p>
        <p>{bestScore}</p>
      </div>
    </div>
  )
}

export default Counter
