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

export interface ModalState {
  isVisible: boolean
  nome: string
  descricao: string
  foto: string
  serve: string
  preco: number
}

const PratosList = ({ cardapio }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(open())
  }
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    nome: '',
    descricao: '',
    foto: '',
    serve: '',
    preco: 0
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      nome: '',
      descricao: '',
      foto: '',
      serve: '',
      preco: 0
    })
  }

  const openModal = (item: CardapioItem) => {
    setModal({
      isVisible: true,
      nome: item.nome,
      descricao: item.descricao,
      foto: item.foto,
      serve: item.porcao,
      preco: item.preco
    })
  }

  return (
    <S.Container>
      <div>
        <S.List>
          {cardapio.cardapio.map((item) => (
            <li key={item.id}>
              <PratoCard
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
            <span>Serve: de {modal.serve}</span>
            <S.Button onClick={addToCart}>
              Adicionar ao carrinho - R$ {modal.preco}
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
