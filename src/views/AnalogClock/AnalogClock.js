import React from 'react'
import './assets/css/clock2style.css'
import './assets/js/clock2app.js'

function AnalogClock() {
  return (
    <div>
      <body>
        <div className="clock">
        <div>
          <div className="info date"></div>
          <div className="info day"></div>
        </div>
        <div className="dot"></div>
        <div>
          <div className="hour-hand"></div>
          <div className="minute-hand"></div>
          <div className="second-hand"></div>
        </div>
        <div>
          <span className="h3">3</span>
          <span className="h6">6</span>
          <span className="h9">9</span>
          <span className="h12">12</span>
        </div>
        <div className="diallines"></div>
      </div>

      <script src="assets/js/clock2app.js"></script>
      </body>
    </div>
  )
}

export default AnalogClock