import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Rotas from './routes'
import { GlobalStyle } from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div>
        <Rotas />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
