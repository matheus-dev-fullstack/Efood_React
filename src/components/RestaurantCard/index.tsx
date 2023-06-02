import Tag from '../Tag'
import sushi from '../../assets/sushi.jpg'
import star from '../../assets/star_favorite-[#1499].png'
import * as S from './styles'

type Props = {
  name: string
  description: string
  stars: number
  category?: string
  infos: string[]
  image: string
}

// const Restaurant1 = {
//   name: 'Hioki Sushi',
//   description: 'Description',
//   stars: 4.9,
//   infos: ['Destaque da Semana'],
//   more: 'Saber mais'
// }

const RestaurantCard = ({ name, description, image, infos, stars }: Props) => {
  return (
    <S.Card>
      <img src={image} alt="" />
      <S.Infos>
        {infos.map((infos) => (
          <Tag key={infos}>{infos}</Tag>
        ))}
      </S.Infos>
      <S.Div>
        <S.Title>{name}</S.Title>
        <S.Stars>
          {stars}
          <img src={star} alt="" />
        </S.Stars>
        <S.Button>
          <Tag size="big" type="button"></Tag>
        </S.Button>
        <p>{description}</p>
      </S.Div>
    </S.Card>
  )
}

export default RestaurantCard
