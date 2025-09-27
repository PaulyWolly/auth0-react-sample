import React from 'react'
import FunctionContextComponent from './FunctionContextComponent';
import { ThemeProvider } from './ThemeContext'
//import ClassContextComponent from './ClassContextComponent';

export default function DemoUseContext() {

  return (
    <div>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </div>
  )
}
