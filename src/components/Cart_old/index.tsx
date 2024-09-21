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
import FormPayment from '../FormPayment';
import SuccessMessage from '../SuccessMessage';

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
          closeCart={closeCart}
          goToPayment={goToPayment}
          goToCart={goToCart}
        />
      )}

      {isPaymentOpen && (
        <FormPayment
          closeCart={closeCart}
          goToSuccessMessage={goToSuccessMessage}
          goToCheckout={goToCheckout}
        />
      )}

      {isSuccessMessage && (
        <SuccessMessage conclude={conclude} closeCart={closeCart} />
      )}
    </>
  );
};
export default Cart;
