import Restaurant from '../../models/Restaurante'
import RestaurantCard from '../RestaurantCard'
import * as S from './styles'

export type Props = {
  places: Restaurant[]
}

const RestautantList = ({ places }: Props) => (
  <S.Container>
    <div className="container">
      <S.List>
        {places.map((place) => (
          <S.Item key={place.id}>
            <RestaurantCard
              name={place.name}
              description={place.description}
              stars={place.stars}
              infos={place.infos}
              image={place.image}
            />
          </S.Item>
        ))}
      </S.List>
    </div>
  </S.Container>
)

export default RestautantList
