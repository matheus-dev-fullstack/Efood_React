import Tag from '../Tag'

import star from '../../assets/star_favorite-[#1499].png'
import * as S from './styles'
import { Link } from 'react-router-dom'

type Props = {
  id: number
  titulo: string
  descricao: string
  avaliacao: number
  category?: string
  tipo: string
  destacado: boolean
  image: string
}

const RestaurantCard = ({
  id,
  titulo,
  descricao,
  image,
  tipo,
  destacado,
  avaliacao
}: Props) => {
  const TipoMaiusculo = tipo.charAt(0).toUpperCase() + tipo.slice(1)

  return (
    <S.Card key={id}>
      <img src={image} alt="" />
      <S.Infos>
        {destacado === true && <Tag>Destaque da semana</Tag>}
        <Tag>{TipoMaiusculo}</Tag>
      </S.Infos>
      <S.Div>
        <S.Title>{titulo}</S.Title>
        <S.Stars>
          {avaliacao}
          <img src={star} alt="" />
        </S.Stars>
        <S.Button to={`/perfil/${id}`}>
          <Tag size="big" type="button"></Tag>
        </S.Button>
        <p>{descricao}</p>
      </S.Div>
    </S.Card>
  )
}

export default RestaurantCard
