import * as S from './styles';
import logo from '../../assets/logo.png';

const Header = () => (
  <S.Header>
    <S.Logo src={logo} alt="" />
    <S.Titulo>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </S.Titulo>
  </S.Header>
);

export default Header;
