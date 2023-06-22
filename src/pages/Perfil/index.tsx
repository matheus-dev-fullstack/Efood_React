import axios from 'axios'
import HeaderPerfil from '../../components/HeaderPerfil'
import Hero from '../../components/Hero'

import PratosList from '../../components/PratosList'
import { CardapioItem, Restaurant } from '../Home'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PratosItalianos: Restaurant['cardapio'][] = [
  {
    id: 1,
    nome: 'Pizza Marguerita',
    foto: 'https://th.bing.com/th/id/R.13e4de6c5c7420bd8935bfd1993f409b?rik=Zg5c7Vu57RwpmQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-KKalXRfI9M4%2fT8LM8nYsuQI%2fAAAAAAAAElU%2fbAIlrvEM7ro%2fs1600%2fpaisagem-montanhosa-imagens-imagem-de-fundo-wallpaper-para-pc-computador-tela-gratis-ambiente-de-trabalho.jpg&ehk=nU8NagJJSdsjZ9irmb042yH9zhbljYwGuVN4dfAUNhU%3d&risl=&pid=ImgRaw&r=0',
    preco: 66,
    porcao: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    nome: 'Pizza Marguerita',
    foto: 'https://th.bing.com/th/id/R.13e4de6c5c7420bd8935bfd1993f409b?rik=Zg5c7Vu57RwpmQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-KKalXRfI9M4%2fT8LM8nYsuQI%2fAAAAAAAAElU%2fbAIlrvEM7ro%2fs1600%2fpaisagem-montanhosa-imagens-imagem-de-fundo-wallpaper-para-pc-computador-tela-gratis-ambiente-de-trabalho.jpg&ehk=nU8NagJJSdsjZ9irmb042yH9zhbljYwGuVN4dfAUNhU%3d&risl=&pid=ImgRaw&r=0',
    preco: 66,
    porcao: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    nome: 'Pizza Marguerita',
    foto: 'https://th.bing.com/th/id/R.13e4de6c5c7420bd8935bfd1993f409b?rik=Zg5c7Vu57RwpmQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-KKalXRfI9M4%2fT8LM8nYsuQI%2fAAAAAAAAElU%2fbAIlrvEM7ro%2fs1600%2fpaisagem-montanhosa-imagens-imagem-de-fundo-wallpaper-para-pc-computador-tela-gratis-ambiente-de-trabalho.jpg&ehk=nU8NagJJSdsjZ9irmb042yH9zhbljYwGuVN4dfAUNhU%3d&risl=&pid=ImgRaw&r=0',
    preco: 66,
    porcao: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Perfil = () => {
  const { id } = useParams()
  const [pratos, setPratos] = useState<CardapioItem[]>([])
  const [restaurantes, setRestaurantes] = useState<Restaurant>()

  useEffect(() => {
    axios
      .get(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      // .then((res) => res.json())
      .then((res) => {
        setRestaurantes(res.data)
      })
  }, [id])

  useEffect(() => {
    axios
      .get(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      // .then((res) => res.json())
      .then((res) => setPratos(res.data.cardapio))
  }, [id])

  if (!pratos) {
    return <h3>Carregando...</h3>
  }
  if (!restaurantes) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderPerfil />
      <Hero restaurant={restaurantes} />
      <PratosList cardapio={pratos} />
    </>
  )
}

export default Perfil
