import Tag from '../Tag';
import fechar from '../../assets/close.png';
import pizza from '../../assets/pizza.jpg';
import * as S from './styles';
import { RootReducer } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { remove, close, open } from '../../store/reducers/cart';
import { useState } from 'react';

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
    setIsSuccessMessage(false);
    setIsLocationOpen(false);
    setIsPaymentOpen(false);
  };

  const goToCart = () => {
    dispatch(open());
    setIsLocationOpen(false);
  };

  const goToCheckout = () => {
    setIsLocationOpen(true);
    setIsPaymentOpen(false);
    dispatch(close());
  };

  const goToPayment = () => {
    setIsLocationOpen(false);
    setIsPaymentOpen(true);
  };

  const goToSuccessMessage = () => {
    setIsPaymentOpen(false);
    setIsSuccessMessage(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Formulário submetido');
    setIsSuccessMessage(false);
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
          </S.Form>
          <S.Buttons>
            <S.CheckoutButton onClick={goToPayment}>
              Continuar com o pagamento
            </S.CheckoutButton>
            <S.CheckoutButton onClick={goToCart}>
              Voltar para o carrinho
            </S.CheckoutButton>
          </S.Buttons>
        </S.Sidebar>
      </S.Container>

      <S.Container className={isPaymentOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart} />
        <S.Sidebar>
          <S.Title>Entrega</S.Title>
          <S.Form onSubmit={handleSubmit}>
            <label htmlFor="">Nome do cartão</label>
            <input type="text" />
            <label htmlFor="">Número do cartão</label>
            <input type="text" />
            <label htmlFor="">CVV</label>
            <input type="text" />
            <S.localization>
              <S.Local>
                <label htmlFor="">Mês de vencimento</label>
                <input type="text" />
              </S.Local>
              <S.Local>
                <label htmlFor="">Ano de vencimento</label>
                <input type="text" />
              </S.Local>
            </S.localization>
          </S.Form>
          <S.Buttons>
            <S.CheckoutButton onClick={goToSuccessMessage}>
              Finalizar pagamento
            </S.CheckoutButton>
            <S.CheckoutButton onClick={goToCheckout}>
              Voltar para a edição de endereço
            </S.CheckoutButton>
          </S.Buttons>
        </S.Sidebar>
      </S.Container>

      <S.Container className={isSuccessMessage ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart} />
        <S.Sidebar>
          <S.Title>Entrega</S.Title>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.{' '}
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <S.Buttons>
            <S.CheckoutButton onClick={goToSuccessMessage}>
              Finalizar pagamento
            </S.CheckoutButton>
            <S.CheckoutButton onClick={goToCheckout}>
              Voltar para a edição de endereço
            </S.CheckoutButton>
          </S.Buttons>
        </S.Sidebar>
      </S.Container>
    </>
  );
};
export default Cart;
