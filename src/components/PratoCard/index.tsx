import { Link } from 'react-router-dom'
import pizza from '../../assets/pizza.jpg'
import Tag from '../Tag'
import * as S from './styles'

type Props = {
  name: string
  description: string
  image: string
}

const PratoCard = ({ name, description, image }: Props) => (
  <S.Card>
    <img src={image} alt="" />
    <S.Infos>
      <S.Name>{name}</S.Name>
      <S.Description>{description}</S.Description>
      <S.Button>Adicionar ao Carrinho</S.Button>
    </S.Infos>
  </S.Card>
)

export default PratoCard
