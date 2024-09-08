import * as S from './styles';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { add, open } from '../../store/reducers/cart';
import { RootReducer } from '../../store';

const HeaderPerfil = () => {
  const dispatch = useDispatch(); //-
  const cart = useSelector((state: RootReducer) => state.cart);
  const totalItems = cart.items.length;

  const openCart = () => {
    dispatch(open());
  };

  return (
    <S.Header>
      <S.Div className="container">
        <Link to={'/'}>
          <S.Home>Restaurantes</S.Home>
        </Link>
        <S.Logo src={logo} alt="" />
        <S.QuantidadeProdutos onClick={openCart}>
          {totalItems} produto(s) no carrinho
        </S.QuantidadeProdutos>
      </S.Div>
    </S.Header>
  );
};
export default HeaderPerfil;
