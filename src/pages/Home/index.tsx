import RestaurantList from '../../components/RestaurantList'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useGetRestaurantsQuery } from '../../services/api'
import Cart from '../../components/Cart'

export type CardapioItem = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

const Home = () => {
  const { data: Restaurants } = useGetRestaurantsQuery()

  if (Restaurants) {
    return (
      <>
        <Cart />
        <Header />
        <RestaurantList places={Restaurants} />
      </>
    )
  }
  return <h4>Carregando</h4>
}

export default Home
