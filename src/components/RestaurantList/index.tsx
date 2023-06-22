import { Restaurant } from '../../pages/Home'
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
              id={place.id}
              titulo={place.titulo}
              descricao={place.descricao}
              avaliacao={place.avaliacao}
              tipo={place.tipo}
              destacado={place.destacado}
              image={place.capa}
            />
          </S.Item>
        ))}
      </S.List>
    </div>
  </S.Container>
)

export default RestautantList
