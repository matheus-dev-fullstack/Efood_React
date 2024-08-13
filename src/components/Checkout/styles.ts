import fechar from '../../assets/lixeira-de-reciclagem 1.png';
import styled from 'styled-components';
import { cores } from '../../styles';
import { Button } from '../PratoCard/styles';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`;
export const CheckoutContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`;
export const Sidebar = styled.aside`
  background-color: ${cores.corTexto};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  // display: flex;
  flex-direction: column;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    color: ${cores.bege};
    font-weight: 700;
    margin-bottom: 8px;
  }
  input,
  input:focus {
    background-color: ${cores.bege};
    border: none;
    font-weight: 700;
    padding: 8px;
    font-size: 14px;
    margin-bottom: 8px;
  }
`;
export const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 16px;
  color: ${cores.bege};
`;
export const localization = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Local = styled.div`
  display: flex;
  flex-direction: column;
  width: 46%;
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
`;
export const CheckoutButton = styled(Button)`
  position: unset;
  margin-bottom: 8px;
`;
