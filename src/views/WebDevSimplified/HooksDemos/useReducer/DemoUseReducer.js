import React, { useReducer } from 'react'

function reducer(state, action) {

  const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET:     'reset'
  }

  switch(action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 }
    case ACTIONS.RESET:
      return { count: state.count = 0 }
    default:
      return state
  }
}

export default function DemoUseReducer() {

  const [state, dispatch] = useReducer(reducer, { count: 0 })
  // const [count, setCount] = useState(0)

  const increment = () => {
    // return setCount(prevCount => prevCount +1)
    dispatch({type: 'increment'})
  }

  const decrement = () => {
    dispatch({type: 'decrement'})
  }

  const resetCount = () => {
    dispatch({type: 'reset'})
  }

  return (
    <>
      <button onClick={increment}>Increment</button>
      &nbsp;
      <span className='value'>{state.count}</span>
      &nbsp;
      <button onClick={decrement}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
    </>
  )
}

