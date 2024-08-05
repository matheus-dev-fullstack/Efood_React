import * as S from './styles';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const HeaderPerfil = () => (
  <S.Header>
    <S.Div className="container">
      <Link to={'/'}>
        <S.Home>Restaurantes</S.Home>
      </Link>
      <S.Logo src={logo} alt="" />
      <S.QuantidadeProdutos>0 produto(s) no carrinho</S.QuantidadeProdutos>
    </S.Div>
  </S.Header>
);

export default HeaderPerfil;
