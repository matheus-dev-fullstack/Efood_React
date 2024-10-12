import * as S from './styles';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { RootReducer } from '../../store';
import {
  addAddressInfos,
  closeAddress,
  openCart,
  openPayment
} from '../../store/reducers/cart';
import InputMask from 'react-input-mask';

const FormLocation = () => {
  const { adressOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const fecharCarrinho = () => {
    dispatch(closeAddress());
  };

  const voltarParaCarrinho = () => {
    dispatch(openCart());
    dispatch(closeAddress());
  };

  const getTotalPrice = () => {
    return items.reduce((acum, valorAtual) => {
      return (acum += valorAtual.preco!);
    }, 0);
  };

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      addressNumber: '',
      complement: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('Digite seu endereço'),
      city: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(8, 'O nome precisa ter pelo menos 8 caracteres')
        .required('O campo é obrigatório'),
      addressNumber: Yup.string()
        .min(1, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      complement: Yup.string().notRequired()
    }),

    onSubmit: (values) => {
      dispatch(
        addAddressInfos({
          products: items.map((item) => ({
            id: item.id,
            price: getTotalPrice()
          })),

          delivery: {
            receiver: values.fullName,
            address: {
              description: values.address,
              city: values.city,
              zipCode: values.zipCode,
              number: Number(values.addressNumber),
              complement: values.complement
            }
          }
        })
      );
      dispatch(openPayment());
      dispatch(closeAddress());
    }
  });

  return (
    <form onSubmit={form.handleSubmit}>
      <S.Container className={adressOpen ? 'is-open' : ''}>
        <S.Overlay onClick={fecharCarrinho} />
        <S.Sidebar>
          <S.Title>Entregas</S.Title>
          <S.DivForm>
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
                <InputMask
                  id="zipCode"
                  name="zipCode"
                  type="text"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.zipCode}
                  mask="99999-999"
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
              <S.CheckoutButton type="submit">
                Continuar com o pagamento
              </S.CheckoutButton>
              <S.CheckoutButton type="button" onClick={voltarParaCarrinho}>
                Voltar para o carrinho
              </S.CheckoutButton>
            </S.Buttons>
          </S.DivForm>
        </S.Sidebar>
      </S.Container>
    </form>
  );
};
export default FormLocation;
