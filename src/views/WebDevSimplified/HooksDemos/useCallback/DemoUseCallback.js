import React, { useState, useCallback } from 'react'
import List from './List.js'

export default function DemoUseCallback() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)

  // useCallback IS ONLY EVER USED for referential equality!!
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2]
  }, [number])

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems}  />
    </div>
  )
}
