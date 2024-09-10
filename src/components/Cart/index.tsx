import Tag from '../Tag';
import fechar from '../../assets/close.png';
import pizza from '../../assets/pizza.jpg';
import * as S from './styles';
import { RootReducer } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { remove, close, open } from '../../store/reducers/cart';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormLocation from '../FormLocation';

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

  const conclude = () => {
    setIsSuccessMessage(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Formulário submetido');
    setIsSuccessMessage(false);
    setIsLocationOpen(false);
    setIsPaymentOpen(false);
  };

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      addressNumber: '',
      complement: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      addressNumber: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      complement: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .notRequired()
    }),

    onSubmit: (values) => {
      console.log(values);
      goToPayment();
    }
  });

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
      {isLocationOpen && (
        <FormLocation
          isLocationOpen={isLocationOpen}
          closeCart={closeCart}
          goToPayment={goToPayment}
          goToCart={goToCart}
        />
      )}

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
          <S.Title>Pedido realizado - ORDER ID</S.Title>
          <S.FinalMessage>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </S.FinalMessage>
          <S.FinalMessage>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.{' '}
          </S.FinalMessage>
          <S.FinalMessage>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </S.FinalMessage>
          <S.FinalMessage>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </S.FinalMessage>
          <S.Buttons>
            <S.CheckoutButton onClick={conclude}>Concluir</S.CheckoutButton>
          </S.Buttons>
        </S.Sidebar>
      </S.Container>
    </>
  );
};
export default Cart;
// function purchase(values: {
//   fullName: string;
//   address: string;
//   city: string;
//   cep: string;
//   addressNumber: string;
//   complement: string;
// }) {
//   console.log('Compra realizada', values);
// }
