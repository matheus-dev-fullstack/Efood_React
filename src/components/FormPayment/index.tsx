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
    </>
  );
};
export default FormPayment;
