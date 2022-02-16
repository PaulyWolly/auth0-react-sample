import React, { useState, useMemo, useEffect } from 'react'

export default function DemoUseMemo() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(true)
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])
  useEffect(() => {
    console.log('theme changed')
  }, [themeStyles])

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      /><br/>
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  )
}

const slowFunction = (num) => {
  //console.log('Calling slow function')
  for (let i = 0; i < 10000000; i++){}
  return num * 2
}
