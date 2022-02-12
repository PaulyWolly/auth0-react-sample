/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import './app.css'

function AppIncrement() {
    const [counter, setCounter] = useState(0)

    function incrementCounterHandler() {
        setCounter((prevCounter) => prevCounter +1);
    }

    return (
        <main className='app-increment'>
            <p>{counter}</p>
            <button onClick={incrementCounterHandler}>Increment</button>
        </main>
    );

}

export default AppIncrement;
