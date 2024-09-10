import * as S from './styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface FormLocationProps {
  isLocationOpen: boolean;
  closeCart: () => void;
  goToPayment: () => void;
  goToCart: () => void;
}

const FormLocation: React.FC<FormLocationProps> = ({
  isLocationOpen,
  closeCart,
  goToPayment,
  goToCart
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
      goToPayment();
    }
  });

  return (
    <>
      <S.Container className={isLocationOpen ? 'is-open' : ''}>
        {/* <Container> */}
        <S.Overlay onClick={closeCart} />
        <S.Sidebar>
          <S.Title>Entregasss</S.Title>
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
                <label htmlFor="cep">CEP</label>
                <input
                  id="cep"
                  name="cep"
                  type="text"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cep}
                />
                {form.touched.cep && form.errors.cep && (
                  <div>{form.errors.cep}</div>
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
              <S.CheckoutButton type="submit">
                Continuar com o pagamento
              </S.CheckoutButton>
              <S.CheckoutButton type="button" onClick={goToCart}>
                Voltar para o carrinho
              </S.CheckoutButton>
            </S.Buttons>
          </S.Form>
        </S.Sidebar>
      </S.Container>
    </>
  );
};
export default FormLocation;
