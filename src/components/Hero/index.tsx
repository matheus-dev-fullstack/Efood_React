import * as S from "./styles"
import bannerImg from "../../assets/bannerImg.jpg"
import { Restaurant } from "../../pages/Home"

type Props = {
  restaurant: Restaurant
}

const Hero = ({ restaurant }: Props) => {
  const TipoMaiusculo =
    restaurant.tipo.charAt(0).toUpperCase() + restaurant.tipo.slice(1)

  if (!restaurant) {
    return <h3>Valor null</h3>
  }
  return (
    <S.Imagem style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <S.Div>
        <S.Text>
          <S.TipoCardapio>{TipoMaiusculo}</S.TipoCardapio>
          <S.NomeRestaurant>{restaurant.titulo}</S.NomeRestaurant>
        </S.Text>
      </S.Div>
    </S.Imagem>
  )
}
export default Hero
