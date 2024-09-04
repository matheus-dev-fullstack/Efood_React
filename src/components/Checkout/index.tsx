// import { CartContainer, Overlay, Sidebar } from "../Cart/styles"
import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles';
import { RootReducer } from '../../store';
import { open } from '../../store/reducers/cart';
import { useState } from 'react';

// Vou criar esse componente e importar no Cart utilizando algum usaState para verificar
// ou quando for acionado continuar com a compra display none em Cart e exibe Checkout.

const Checkout = () => {
  // const { isCheckoutOpen } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const exitCheckout = () => {
    // dispatch(closeCheckout());
  };

  const backToCart = () => {
    dispatch(open());
  };

  // return (
  //   <S.CheckoutContainer className={isCheckoutOpen ? 'is-open' : ''}>
  //     <S.Overlay onClick={exitCheckout} />
  //     <S.Sidebar>
  //       <S.Title>Entrega</S.Title>
  //       <S.Form action="POST">
  //         <label htmlFor="">Quem ira receber</label>
  //         <input type="text" />
  //         <label htmlFor="">Endereço</label>
  //         <input type="text" />
  //         <label htmlFor="">Cidade</label>
  //         <input type="text" />
  //         <S.localization>
  //           <S.Local>
  //             <label htmlFor="">CEP</label>
  //             <input type="text" />
  //           </S.Local>
  //           <S.Local>
  //             <label htmlFor="">Número</label>
  //             <input type="text" />
  //           </S.Local>
  //         </S.localization>
  //         <label htmlFor="">Complemento (opcional)</label>
  //         <input type="text" />
  //         <S.Buttons>
  //           <S.CheckoutButton>Continuar com o pagamento</S.CheckoutButton>
  //           <S.CheckoutButton onClick={backToCart}>
  //             Voltar para o carrinho
  //           </S.CheckoutButton>
  //         </S.Buttons>
  //       </S.Form>
  //     </S.Sidebar>
  //   </S.CheckoutContainer>
  // );
};

export default Checkout;
