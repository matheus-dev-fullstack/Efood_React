import { CardapioItem, Restaurant } from '../../pages/Home'
import PratoCard from '../PratoCard'
import Fechar from '../../assets/close.png'
import * as S from './styles'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { add, open } from '../../store/reducers/cart'
import { Item } from '../RestaurantList/styles'

export type Props = {
  cardapio: Restaurant
}

export interface ModalState extends CardapioItem {
  isVisible: boolean
}

const PratosList = ({ cardapio }: Props) => {
  const dispatch = useDispatch()

  const addToCart = (item: CardapioItem) => {
    dispatch(open())
    dispatch(add(item))
    closeModal()
  }

  const [modal, setModal] = useState<ModalState>({
    id: 0,
    isVisible: false,
    nome: '',
    descricao: '',
    foto: '',
    porcao: '',
    preco: 0
  })

  const closeModal = () => {
    setModal({
      id: 0,
      isVisible: false,
      nome: '',
      descricao: '',
      foto: '',
      porcao: '',
      preco: 0
    })
  }

  const openModal = (item: CardapioItem) => {
    setModal({
      id: item.id,
      isVisible: true,
      nome: item.nome,
      descricao: item.descricao,
      foto: item.foto,
      porcao: item.porcao,
      preco: item.preco
    })
  }
  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <S.Container>
      <div>
        <S.List>
          {cardapio.cardapio.map((item) => (
            <li key={item.id}>
              <PratoCard
                id={item.id}
                nome={item.nome}
                descricao={item.descricao}
                foto={item.foto}
                onButtonClick={() => {
                  openModal(item)
                }}
              />
            </li>
          ))}
        </S.List>
      </div>
      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContent>
          <S.ModalImage src={modal.foto} alt="" />
          <S.Infos>
            <h3>{modal.nome}</h3>
            <p>{modal.descricao}</p>
            <span>Serve: de {modal.porcao}</span>
            <S.Button
              onClick={() => {
                addToCart(modal)
              }}
            >
              Adicionar ao carrinho - {formataPreco(modal.preco)}
            </S.Button>
          </S.Infos>
          <S.Close
            onClick={() => {
              closeModal()
            }}
            src={Fechar}
            alt=""
          />
        </S.ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </S.Modal>
    </S.Container>
  )
}
export default PratosList
