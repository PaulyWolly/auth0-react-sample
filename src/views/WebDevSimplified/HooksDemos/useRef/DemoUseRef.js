import React, { useEffect, useRef, useState } from 'react'

export default function DemoUseRef() {
  const [name, setName] = useState('')
  const renderCount = useRef(1)
  const prevName = useRef('')

  useEffect(() => {
    renderCount.current = renderCount.current + 1
    prevName.current = name
  }, [name])

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <div>My name is ({name}) and it use to be ({prevName.current})</div>
      <h3>I rendered {renderCount.current} times</h3>
    </div>
  )
}
