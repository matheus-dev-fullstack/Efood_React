import * as S from './styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface FormPaymentProps {
  isPaymentOpen: boolean;
  closeCart: () => void;
  goToSuccessMessage: () => void;
  goToCheckout: () => void;
}

const FormPayment: React.FC<FormPaymentProps> = ({
  isPaymentOpen,
  closeCart,
  goToSuccessMessage,
  goToCheckout
}) => {
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
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cvv: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardEndMonth: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardEndYear: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório')
    }),

    onSubmit: (values) => {
      console.log(values);
      goToSuccessMessage();
    }
  });

  return (
    <>
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
              id="cvv"
              name="cvv"
              type="string"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.cvv}
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
    </>
  );
};
export default FormPayment;
