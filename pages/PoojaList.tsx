import React from 'react'
import Pooja from './PoojaCard'

import { DUMMY_POOJAS } from '../public/data'

const PoojaList = () => {
  const poojaList = Object.values(DUMMY_POOJAS).map((pooja) => (
    <Pooja
      key={pooja.id}
      id={pooja.id}
      name={pooja.name}
      imageUrl={pooja.imageUrl}
      description={pooja.description}
    />
  ))

  return (
    <>{poojaList}</>
  )
}

export default PoojaList