import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)


   const increasescount = () => {
     setCount((prevCount) => prevCount + 1);
   };

   const decreasescount = () => {
     setCount((prevCount) => prevCount - 1);
   };



  return (
      <div>
          <h1>Counter :{count}</h1>
          <button onClick={decreasescount}>-</button>
          <button onClick={increasescount}>+</button>
      </div>
  )
}

export default Counter