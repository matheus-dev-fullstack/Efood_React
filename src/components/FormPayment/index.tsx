import * as S from './styles';
import { useFormik } from 'formik';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { RootReducer } from '../../store';
import {
  closePayment,
  openAddress,
  openThanks
} from '../../store/reducers/cart';

const FormPayment = () => {
  const { paymentOpen, items } = useSelector(
    (state: RootReducer) => state.cart
  );
  const dispatch = useDispatch();

  const fechar = () => {
    dispatch(closePayment());
  };
  const irParaMensagemFinal = () => {
    dispatch(openThanks());
    dispatch(closePayment());
  };
  const voltarParaLocalizacao = () => {
    dispatch(openAddress());
    dispatch(closePayment());
  };

  const form = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      cardEndMonth: '',
      cardEndYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(13, 'O nome precisa ter pelo menos 13 caracteres')
        .required('O campo é obrigatório'),
      cvv: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      cardEndMonth: Yup.string()
        .min(2, 'O nome precisa ter pelo menos 2 caracteres')
        .required('O campo é obrigatório'),
      cardEndYear: Yup.string()
        .min(2, 'O nome precisa ter pelo menos 2 caracteres')
        .required('O campo é obrigatório')
    }),

    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <>
      <S.Container className={paymentOpen ? 'is-open' : ''}>
        {/* <S.Container className="is-open"> */}
        <S.Overlay onClick={fechar} />
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
            <InputMask
              id="cardNumber"
              name="cardNumber"
              type="string"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.cardNumber}
              mask="9999 9999 9999 9999"
            />
            {form.touched.cardName && form.errors.cardName && (
              <div>{form.errors.cardName}</div>
            )}
            <label htmlFor="cvv">CVV</label>
            <InputMask
              id="cvv"
              name="cvv"
              type="string"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.cvv}
              mask="999"
              maxLength={3}
            />
            {form.touched.cvv && form.errors.cvv && (
              <div>{form.errors.cvv}</div>
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
                  maxLength={2}
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
                  maxLength={4}
                />
                {form.touched.cardEndYear && form.errors.cardEndYear && (
                  <div>{form.errors.cardEndYear}</div>
                )}
              </S.Local>
            </S.localization>
            <S.Buttons>
              <S.CheckoutButton onClick={irParaMensagemFinal}>
                Finalizar pagamento
              </S.CheckoutButton>
              <S.CheckoutButton onClick={voltarParaLocalizacao}>
                Voltar para a edição de endereço
              </S.CheckoutButton>
            </S.Buttons>
          </S.Form>
        </S.Sidebar>
      </S.Container>
    </>
  );
};
export default FormPayment;
