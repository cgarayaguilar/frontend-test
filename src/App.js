import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './App.routes'
import { GlobalStyle } from 'styles/globalStyles'

function App() {
  return (
    <section>
      <Router>
        <AppRoutes />
        <GlobalStyle />
      </Router>
    </section>
  )
}

export default App
