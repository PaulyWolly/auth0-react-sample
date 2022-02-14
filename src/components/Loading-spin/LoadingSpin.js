import React from 'react'
import './Loading.css'

const LoadingSpin = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        style={{position: 'absolute', marginTop: '200px', width: '4rem', height: '4rem'}}
        className="spinner-border text-primary"
        role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}
export default LoadingSpin
