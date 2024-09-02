// import { CartContainer, Overlay, Sidebar } from "../Cart/styles"
import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles';
import { RootReducer } from '../../store';
import { closeLocation } from '../../store/reducers/cart';
import { useState } from 'react';

const Payment = () => {
  const { isLocationOpen } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const exitCheckout = () => {
    dispatch(closeLocation());
  };

  const backToCart = () => {
    // dispatch(closeCheckout());
  };

  return (
    <S.CheckoutContainer className={isLocationOpen ? 'is-open' : ''}>
      <S.Overlay onClick={exitCheckout} />
      <S.Sidebar>
        <S.Title>Entrega</S.Title>
        <S.Form action="POST">
          <label htmlFor="">Quem ira receber</label>
          <input type="text" />
          <label htmlFor="">Endereço</label>
          <input type="text" />
          <label htmlFor="">Cidade</label>
          <input type="text" />
          <S.localization>
            <S.Local>
              <label htmlFor="">CEP</label>
              <input type="text" />
            </S.Local>
            <S.Local>
              <label htmlFor="">Número</label>
              <input type="text" />
            </S.Local>
          </S.localization>
          <label htmlFor="">Complemento (opcional)</label>
          <input type="text" />
          <S.Buttons>
            <S.CheckoutButton>Continuar com o pagamento</S.CheckoutButton>
            <S.CheckoutButton onClick={backToCart}>
              Voltar para o carrinho
            </S.CheckoutButton>
          </S.Buttons>
        </S.Form>
      </S.Sidebar>
    </S.CheckoutContainer>
  );
};

export default Payment;
