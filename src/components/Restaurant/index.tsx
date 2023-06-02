import Tag from '../Tag'
import sushi from '../../assets/sushi.jpg'
import * as S from './styles'

// type Props = {
//   name: string
//   description: string
//   stars: number
//   category: string
// }

const Restaurant = () => {
  return (
    <S.Card>
      <img src={sushi} alt="" />
      <S.Div>
        <S.Title>Hioki Sushi</S.Title>
        <p>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida. <br />{' '}
          Experimente o Japão sem sair do lar com nosso delivery!
        </p>
      </S.Div>
    </S.Card>
  )
}

export default Restaurant
