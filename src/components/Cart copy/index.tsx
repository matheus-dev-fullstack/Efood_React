import * as S from './styles';
import { RootReducer } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { remove, close, open } from '../../store/reducers/cart';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { usePurchaseMutation } from '../../services/api';

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation();

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

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      addressNumber: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      code: '',
      cardEndMonth: '',
      cardEndYear: ''
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
      zipCode: Yup.string()
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
      // console.log(values);
      // goToPayment();
      purchase({
        delivery: {
          name: values.fullName,
          address: {
            city: values.city,
            zipCode: values.zipCode,
            number: values.addressNumber,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: values.code,
            expires: {
              month: values.cardEndMonth,
              year: values.cardEndYear
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      });
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
      {/* {isLocationOpen && (
        <FormLocation
          closeCart={closeCart}
          goToPayment={goToPayment}
          goToCart={goToCart}
        />
      )} */}
      <S.Container className={isLocationOpen ? 'is-open' : ''}>
        {/* <Container> */}
        <S.Overlay onClick={closeCart} />
        <S.Sidebar>
          <S.Title>Entregas</S.Title>
          <S.Form onSubmit={form.handleSubmit}>
            <label htmlFor="fullName">Quem irá receber</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.fullName}
            />
            {form.touched.fullName && form.errors.fullName && (
              <div>{form.errors.fullName}</div>
            )}

            <label htmlFor="address">Endereço</label>
            <input
              id="address"
              name="address"
              type="text"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.address}
            />
            {form.touched.address && form.errors.address && (
              <div>{form.errors.address}</div>
            )}
            <label htmlFor="city">Cidade</label>
            <input
              id="city"
              name="city"
              type="text"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.city}
            />
            {form.touched.city && form.errors.city && (
              <div>{form.errors.city}</div>
            )}
            <S.localization>
              <S.Local>
                <label htmlFor="zipCode">CEP</label>
                <input
                  id="zipCode"
                  name="zipCode"
                  type="text"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.zipCode}
                />
                {form.touched.zipCode && form.errors.zipCode && (
                  <div>{form.errors.zipCode}</div>
                )}
              </S.Local>
              <S.Local>
                <label htmlFor="addressNumber">Número</label>
                <input
                  id="addressNumber"
                  name="addressNumber"
                  type="text"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.addressNumber}
                />
                {form.touched.addressNumber && form.errors.addressNumber && (
                  <div>{form.errors.addressNumber}</div>
                )}
              </S.Local>
            </S.localization>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              id="complement"
              name="complement"
              type="text"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.complement}
            />
            <S.Buttons>
              <S.CheckoutButton type="button" >
                Continuar com o pagamento
              </S.CheckoutButton>
              <S.CheckoutButton type="button" onClick={goToCart}>
                Voltar para o carrinho
              </S.CheckoutButton>
            </S.Buttons>
          </S.Form>
        </S.Sidebar>
      </S.Container>

      {/* {isPaymentOpen && (
        <FormPayment
          closeCart={closeCart}
          goToSuccessMessage={goToSuccessMessage}
          goToCheckout={goToCheckout}
        />
      )} */}

      <S.Container className={isPaymentOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart} />
        <S.Sidebar>
          <S.Title>Entrega</S.Title>
          <S.Form onSubmit={form.handleSubmit}>
            <label htmlFor="cardName">Nome do cartão</label>
            <input
              id="cardName"
              name="cardName"
              type="text"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.cardName}
            />
            {form.touched.cardName && form.errors.cardName && (
              <div>{form.errors.cardName}</div>
            )}
            <label htmlFor="cardNumber">Número do cartão</label>
            <input
              id="cardNumber"
              name="cardNumber"
              type="string"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.cardNumber}
            />
            {form.touched.cardName && form.errors.cardName && (
              <div>{form.errors.cardName}</div>
            )}
            <label htmlFor="cvv">CVV</label>
            <input
              id="code"
              name="code"
              type="string"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.code}
            />
            {form.touched.code && form.errors.code && (
              <div>{form.errors.code}</div>
            )}
            <S.localization>
              <S.Local>
                <label htmlFor="cardEndMonth">Mês de vencimento</label>
                <input
                  id="cardEndMonth"
                  name="cardEndMonth"
                  type="string"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cardEndMonth}
                />
                {form.touched.cardEndMonth && form.errors.cardEndMonth && (
                  <div>{form.errors.cardEndMonth}</div>
                )}
              </S.Local>
              <S.Local>
                <label htmlFor="cardEndYear">Ano de vencimento</label>
                <input
                  id="cardEndYear"
                  name="cardEndYear"
                  type="string"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cardEndYear}
                />
                {form.touched.cardEndYear && form.errors.cardEndYear && (
                  <div>{form.errors.cardEndYear}</div>
                )}
              </S.Local>
            </S.localization>
            <S.Buttons>
              <S.CheckoutButton type="submit">
                Finalizar pagamento
              </S.CheckoutButton>
              <S.CheckoutButton onClick={goToCheckout}>
                Voltar para a edição de endereço
              </S.CheckoutButton>
            </S.Buttons>
          </S.Form>
        </S.Sidebar>
      </S.Container>

      {/* {isSuccessMessage && (
        <SuccessMessage conclude={conclude} closeCart={closeCart} />
      )} */}
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
