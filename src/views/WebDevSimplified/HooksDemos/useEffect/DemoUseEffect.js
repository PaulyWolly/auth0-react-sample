import React, { useState, useEffect } from 'react'
import './DemoUseEffect.css'

function DemoUseEffect() {

  const [ resourceType, setResourceType ] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))
  }, [resourceType])

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
    <h1>{resourceType}</h1>
    <div className='useEffect'>
      {items && items.map(item => {
        return <p key={item.id}>{JSON.stringify(item)}</p>
      })}
    </div>
    </>
  )
}

export default DemoUseEffect

