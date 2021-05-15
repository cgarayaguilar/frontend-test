import React, { useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './App.routes'
import { ThemeProvider } from 'styled-components'
import { AppContext } from 'store'
import { GlobalStyle } from 'styles/globalStyles'

function App() {
  const { theme } = useContext(AppContext)

  return (
    <section>
      <ThemeProvider theme={theme}>
        <Router>
          <AppRoutes />
          <GlobalStyle />
        </Router>
      </ThemeProvider>
    </section>
  )
}

export default App
