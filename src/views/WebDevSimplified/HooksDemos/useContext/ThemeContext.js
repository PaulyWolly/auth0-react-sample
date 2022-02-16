import React, { useState, useContext } from "react"

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

// custom hook
export function useTheme() {
  return useContext(ThemeContext)
}
// custom hook
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext)
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true)

  const toggleTheme = () => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )

}