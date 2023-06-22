import { CardapioItem, Restaurant } from '../../pages/Home'
import PratoCard from '../PratoCard'
import Fechar from '../../assets/close.png'
import * as S from './styles'
import { useState } from 'react'

export type Props = {
  cardapio: CardapioItem[]
}

interface ModalState {
  isVisible: boolean
  nome: string
  descricao: string
  foto: string
  serve: string
  preco: number
}

const PratosList = ({ cardapio }: Props) => {
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

  if (!Array.isArray(cardapio)) {
    return <h3>Erro: cardapio não é um array válido</h3>
  }

  return (
    <S.Container>
      <div>
        <S.List>
          {cardapio.map((item) => (
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
            <S.Button>Adicionar ao carrinho - R$ {modal.preco}</S.Button>
          </S.Infos>
          <S.Close
            onClick={() => {
              closeModal()
              // alert('Close')
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
