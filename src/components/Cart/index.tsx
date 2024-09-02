import Tag from '../Tag';
import fechar from '../../assets/close.png';
import pizza from '../../assets/pizza.jpg';
import * as S from './styles';
import { RootReducer } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import {
  remove,
  close,
  open,
  openLocation,
  openPayment
} from '../../store/reducers/cart';

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  const dispatch = useDispatch();

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

  const closeCart = () => {
    dispatch(close());
  };

  const goToCheckout = () => {
    setIsLocationOpen(true);
    setIsPaymentOpen(false);
  };

  const goToPayment = () => {
    setIsLocationOpen(false);
    setIsPaymentOpen(true);
  };

  const goToCart = () => {
    setIsLocationOpen(false);
    setIsPaymentOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Formulário submetido');
    setIsSuccessMessage(true);
    setIsLocationOpen(false);
    setIsPaymentOpen(false);
  };

  return (
    <>
      <S.Container className={isOpen ? 'is-open' : ''}>
        {/* <Container> */}
        <S.Overlay onClick={closeCart} />
        <S.Sidebar>
          <ul>
            <li>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt="" />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>R$ {formataPreco(item.preco)}</p>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </S.CartItem>
              ))}
            </li>
          </ul>
          <S.ValorTotal>
            <span>Valor total</span>
            <span>{formataPreco(getTotalPrice())}</span>
          </S.ValorTotal>
          <S.CartButton type="button" onClick={goToCheckout}>
            Continuar com a entrega
          </S.CartButton>
        </S.Sidebar>
      </S.Container>
      <S.Container className={isLocationOpen ? 'is-open' : ''}>
        {/* <Container> */}
        <S.Overlay onClick={closeCart} />
        <S.Sidebar>
          <S.Title>Entrega</S.Title>
          <S.Form onSubmit={handleSubmit}>
            <label htmlFor="">Quem ira receber</label>
            <input type="text" />
            <label htmlFor="">Endereço</label>
            <input type="text" />
            <label htmlFor="">Cidade</label>
            <input type="text" />
            <S.localization>
              <S.Local>
                <label htmlFor="">CEP</label>
                <input type="text" />
              </S.Local>
              <S.Local>
                <label htmlFor="">Número</label>
                <input type="text" />
              </S.Local>
            </S.localization>
            <label htmlFor="">Complemento (opcional)</label>
            <input type="text" />
            <S.Buttons>
              <S.CheckoutButton onClick={goToPayment}>
                Continuar com o pagamento
              </S.CheckoutButton>
              <S.CheckoutButton onClick={goToCart}>
                Voltar para o carrinho
              </S.CheckoutButton>
            </S.Buttons>
          </S.Form>
        </S.Sidebar>
      </S.Container>

      <S.Container className={isPaymentOpen ? 'is-open' : ''}>
        <S.Overlay onClick={goToCart} />
        <S.Sidebar>
          <S.Title>Entrega</S.Title>
          <S.Form onSubmit={handleSubmit}>
            <label htmlFor="">Quem ira receber</label>
            <input type="text" />
            <label htmlFor="">Endereço</label>
            <input type="text" />
            <label htmlFor="">Cidade</label>
            <input type="text" />
            <S.localization>
              <S.Local>
                <label htmlFor="">CEP</label>
                <input type="text" />
              </S.Local>
              <S.Local>
                <label htmlFor="">Número</label>
                <input type="text" />
              </S.Local>
            </S.localization>
            <label htmlFor="">Complemento (opcional)</label>
            <input type="text" />
            <S.Buttons>
              <S.CheckoutButton>Continuar com o pagamento</S.CheckoutButton>
              <S.CheckoutButton onClick={goToCheckout}>
                Voltar para o carrinho
              </S.CheckoutButton>
            </S.Buttons>
          </S.Form>
        </S.Sidebar>
      </S.Container>
    </>
  );
};
export default Cart;
