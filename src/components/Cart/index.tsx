import Tag from '../Tag';
import fechar from '../../assets/close.png';
import pizza from '../../assets/pizza.jpg';
import {
  Overlay,
  CartContainer,
  Sidebar,
  CartItem,
  ValorTotal,
  CartButton
} from './styles';
import { RootReducer } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { remove, close, openCheckout } from '../../store/reducers/cart';
import Checkout from '../Checkout';

const Cart = () => {
  const { isOpen, items, isCheckoutOpen } = useSelector(
    (state: RootReducer) => state.cart
  );

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  const goToCheckout = () => {
    dispatch(openCheckout());
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco);
    }, 0);
  };

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco);
  };

  return (
    <>
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeCart} />
        <Sidebar>
          <ul>
            {items.map((item) => (
              <CartItem key={item.id}>
                <img src={item.foto} alt="" />
                <div>
                  <h3>{item.nome}</h3>
                  <p>R$ {formataPreco(item.preco)}</p>
                </div>
                <button onClick={() => removeItem(item.id)} type="button" />
              </CartItem>
            ))}
          </ul>
          <ValorTotal>
            <span>Valor total</span>
            <span>{formataPreco(getTotalPrice())}</span>
          </ValorTotal>
          <CartButton type="button" onClick={goToCheckout}>
            Continuar com a entrega
          </CartButton>
        </Sidebar>
        <></>
      </CartContainer>
    </>
  );
};
export default Cart;
