import * as S from './styles';
import { RootReducer } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import {
  remove,
  closeCart,
  openCart,
  openAddress
} from '../../store/reducers/cart';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Cart = () => {
  const { cartIsOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

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
  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const fecharCarrinho = () => {
    dispatch(closeCart());
  };

  const irParaEndereco = () => {
    dispatch(openAddress());
    dispatch(closeCart());
  };

  return (
    <>
      {/* <S.Container className={isOpen ? 'is-open' : ''}> */}
      <S.Container className="is-open">
        {/* <Container> */}
        <S.Overlay onClick={fecharCarrinho} />
        <S.Sidebar>
          {cartIsOpen && (
            <>
              <ul>
                <li>
                  {items.map((item) => (
                    <S.CartItem key={item.id}>
                      <img src={item.foto} alt="" />
                      <div>
                        <h3>{item.nome}</h3>
                        <p>R$ {formataPreco(item.preco)}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        type="button"
                      />
                    </S.CartItem>
                  ))}
                </li>
              </ul>
              <S.ValorTotal>
                <span>Valor total</span>
                <span>{formataPreco(getTotalPrice())}</span>
              </S.ValorTotal>
              <S.CartButton type="button" onClick={irParaEndereco}>
                Continuar com a entrega
              </S.CartButton>
            </>
          )}
        </S.Sidebar>
      </S.Container>
    </>
  );
};
export default Cart;
