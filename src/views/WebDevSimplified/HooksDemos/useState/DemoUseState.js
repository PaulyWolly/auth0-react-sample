import React, { useState } from 'react'

function DemoUseState() {

  const [count, setCount] = useState(4)

  const increment = () => {
    return setCount(prevCount => prevCount + 1)
  }

  const decrement = () => {
    return setCount(prevCount => prevCount - 1)
  }

  const resetCount = () => {
    return setCount(4)
  }

  return (
    <>
      <button onClick={increment}>Increment</button>
      &nbsp;
      <span className='value'>{count}</span>
      &nbsp;
      <button onClick={decrement}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
    </>
  )
}

export default DemoUseState