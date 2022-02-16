import React from 'react'
import DemoUseEffect from './useEffect/DemoUseEffect';
import DemoUseState from './useState/DemoUseState';
import DemoUseMemo from './useMemo/DemoUseMemo';

import DemoUseRef from './useRef/DemoUseRef';
import DemoUseContext from './useContext/DemoUseContext';
import DemoUseReducer from './useReducer/DemoUseReducer';

// styles
import './HooksDemos.css'


function HooksDemos() {
  return (
    <div>
      <div>HooksDemos</div>
      <p>--------------------------------</p>
      <p>&nbsp;</p>

      <p className='demo-title'>- useState ----------------------</p>
        <DemoUseState />
        <br /><br />
      <p>==================================</p>

      <p className='demo-title'>- useEffect ---------------------</p>
        <DemoUseEffect />
        <br /><br />
      <p>==================================</p>

      <p className='demo-title'>- useDemo ---------------------</p>
        <DemoUseMemo />
        <br /><br />
      <p>==================================</p>

      <p className='demo-title'>- useRef ---------------------</p>
        <DemoUseRef />
        <br /><br />
      <p>==================================</p>

      <p className='demo-title'>- useContext ---------------------</p>
        <DemoUseContext />
        <br /><br />
      <p>==================================</p>

      <p className='demo-title'>- useReducer ---------------------</p>
        <DemoUseReducer />
        <br /><br />
      <p>==================================</p>

    </div>
  )
}

export default HooksDemos