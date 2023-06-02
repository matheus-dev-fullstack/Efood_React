import React from 'react'

import { GlobalStyle } from './styles'
import * as S from './styles'
import Header from './components/Header'
import Restaurant from './components/Restaurant'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <>
          <Header />
          <Restaurant />
        </>
      </div>
    </>
  )
}

export default App
