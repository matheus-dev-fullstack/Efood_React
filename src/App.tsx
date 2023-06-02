import React from 'react'

import { GlobalStyle } from './styles'
import * as S from './styles'
import Header from './components/Header'
import Restaurant from './components/RestaurantCard'
import RestaurantList from './components/RestaurantList'
import TesteRestaurantes from './components/TesteRestaurantes'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Header />
        <TesteRestaurantes />
        <Footer />
      </div>
    </>
  )
}

export default App
