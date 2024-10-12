import * as S from './styles';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { RootReducer } from '../../store';
import { closeThanks } from '../../store/reducers/cart';

const SuccessMessage = () => {
  const { thanksOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const fechar = () => {
    dispatch(closeThanks());
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
        .min(1, 'O nome precisa ter pelo menos 1 caracter')
        .required('O campo é obrigatório'),
      complement: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .notRequired()
    }),

    onSubmit: (values) => {
      console.log(values);
      // conclude();
    }
  });

  return (
    <>
      <S.Container className={thanksOpen ? 'is-open' : ''}>
        {/* <S.Container className="is-open"> */}
        <S.Overlay onClick={fechar} />
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
            <S.CheckoutButton onClick={fechar}>Concluir</S.CheckoutButton>
          </S.Buttons>
        </S.Sidebar>
      </S.Container>
    </>
  );
};
export default SuccessMessage;
