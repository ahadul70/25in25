import React, { useContext } from 'react'
import {StringContext,NumberContext} from "./DoubleParent.jsx"
const DoubleChild = () => {
    const name = useContext(StringContext)
    const number =useContext(NumberContext)
  return (
      <div>
          <p>{name}</p>
          <p>{number}</p>
    </div>
  )
}

export default DoubleChild