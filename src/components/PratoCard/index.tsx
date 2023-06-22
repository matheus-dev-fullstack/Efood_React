import { Link } from 'react-router-dom'
import pizza from '../../assets/pizza.jpg'
import Tag from '../Tag'
import * as S from './styles'

type Props = {
  nome: string
  descricao: string
  foto: string
  onButtonClick: () => void
}

const PratoCard = ({ nome, descricao, foto, onButtonClick }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 180) {
      return descricao.slice(0, 179) + '...'
    }
    return descricao
  }

  return (
    <S.Card>
      <img src={foto} alt="" />
      <S.Infos>
        <S.Name>{nome}</S.Name>
        <S.Description>{getDescricao(descricao)}</S.Description>
        <S.Button onClick={onButtonClick}>Adicionar ao Carrinho</S.Button>
      </S.Infos>
    </S.Card>
  )
}
export default PratoCard
