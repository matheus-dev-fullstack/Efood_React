import Prato from '../../models/Prato'
import PratoCard from '../PratoCard'
import * as S from './styles'

export type Props = {
  cardapio: Prato[]
}

const PratosList = ({ cardapio }: Props) => (
  <S.Container>
    <div>
      <S.List>
        {cardapio.map((item) => (
          <li key={item.id}>
            <PratoCard
              name={item.name}
              description={item.description}
              image={item.image}
            />
          </li>
        ))}
      </S.List>
    </div>
  </S.Container>
)

export default PratosList
