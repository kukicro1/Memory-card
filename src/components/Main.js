import React, { useEffect, useState } from 'react'
import CardBoard from './main/CardBoard'
import Counter from './main/Counter'

import astonMartingImg from '/home/kuki/Desktop/odin/odin/memory_card/src/images/Aston-martin.jpg'
import audiImg from '/home/kuki/Desktop/odin/odin/memory_card/src/images/Audi.jpg'
import bmwImg from '/home/kuki/Desktop/odin/odin/memory_card/src/images/BMW.jpg'
import bugattiImg from '/home/kuki/Desktop/odin/odin/memory_card/src/images/Bugatti.jpg'
import ferrariImg from '/home/kuki/Desktop/odin/odin/memory_card/src/images/Ferrari.jpg'
import lamborghiniImg from '/home/kuki/Desktop/odin/odin/memory_card/src/images/Lamborghini.webp'
import mercedesImg from '/home/kuki/Desktop/odin/odin/memory_card/src/images/Mercedes.jpg'
import mustangImg from '/home/kuki/Desktop/odin/odin/memory_card/src/images/Mustang.jpg'
import battistaImg from '/home/kuki/Desktop/odin/odin/memory_card/src/images/Pininfarina-battista.webp'
import porscheImg from '/home/kuki/Desktop/odin/odin/memory_card/src/images/Porsche.jpg'
import rimacImg from '/home/kuki/Desktop/odin/odin/memory_card/src/images/Rimac.png'
import teslaImg from '/home/kuki/Desktop/odin/odin/memory_card/src/images/Tesla.jpg'

function Main() {
  const [currentScore, setCurrentScore] = useState(() => 0)
  const [bestScore, setBestScore] = useState(() => 0)
  const [clickedCards, setClickedCards] = useState(() => [])
  const [cars, setCars] = useState(() => [
    {
      alt: 'Aston Martin',
      src: astonMartingImg,
    },
    {
      alt: 'Audi',
      src: audiImg,
    },
    {
      alt: 'BMW',
      src: bmwImg,
    },
    {
      alt: 'Bugatti',
      src: bugattiImg,
    },
    {
      alt: 'Ferrari',
      src: ferrariImg,
    },
    {
      alt: 'Lamborghini',
      src: lamborghiniImg,
    },
    {
      alt: 'Mercedes',
      src: mercedesImg,
    },
    {
      alt: 'Mustang',
      src: mustangImg,
    },
    {
      alt: 'Pininfarina',
      src: battistaImg,
    },
    {
      alt: 'Porsche',
      src: porscheImg,
    },
    {
      alt: 'Rimac',
      src: rimacImg,
    },
    {
      alt: 'Tesla',
      src: teslaImg,
    },
  ])

  useEffect(() => {
    setBestScore((prevBest) => {
      if (currentScore >= prevBest) {
        return (prevBest = currentScore)
      } else if (prevBest > currentScore) {
        return prevBest
      }
    })
  }, [currentScore])

  function shuffleGrid() {
    const shuffled = cars.sort(() => Math.random() - 0.5)
    setCars(shuffled)
  }

  function handleClick(e) {
    const target = e.target
    if (clickedCards.includes(target.id)) {
      setClickedCards([])
      setCurrentScore(0)
    } else {
      setClickedCards((prevClicked) => {
        return [...prevClicked, target.id]
      })
      setCurrentScore((prevCurrent) => prevCurrent + 1)
    }
    shuffleGrid()
  }

  return (
    <div className='main'>
      <Counter currentScore={currentScore} bestScore={bestScore} />
      <CardBoard cars={cars} handleClick={handleClick} />
    </div>
  )
}

export default Main
