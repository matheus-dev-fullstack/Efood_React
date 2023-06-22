import RestaurantList from '../../components/RestaurantList'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import axios from 'axios'

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

  cardapio: CardapioItem
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurant[]>([])

  useEffect(() => {
    axios
      .get('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      // .then((res) => res.json())
      .then((res) => {
        setRestaurantes(res.data)
      })
  }, [])

  return (
    <>
      <Header />
      <RestaurantList places={restaurantes} />
    </>
  )
}

export default Home
