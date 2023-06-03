import * as S from './styles'
import bannerImg from '../../assets/bannerImg.jpg'

const Hero = () => (
  <S.Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <S.Div>
      <S.Text>
        <S.TipoCardapio>Italiana</S.TipoCardapio>
        <S.NomePrato>La Dolce Vita Trattoria</S.NomePrato>
      </S.Text>
    </S.Div>
  </S.Imagem>
)

export default Hero
