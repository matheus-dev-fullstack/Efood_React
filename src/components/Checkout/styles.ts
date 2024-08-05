import fechar from "../../assets/lixeira-de-reciclagem 1.png"
import styled from "styled-components"
import { cores } from "../../styles"
import { Button } from "../PratoCard/styles"

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`
export const CartContainer = styled.div`
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
`
export const Sidebar = styled.aside`
  background-color: ${cores.corTexto}};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  // display: flex;
  flex-direction: column;
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.bege};
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 3px;
  color: ${cores.corTexto};
  position: relative;

  img {
    object-fit: cover;
    height: 80px;
    width: 80px;
    margin-right: 8px;
    border-radius: 3px;
  }

  h3 {
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;
  }
`

export const ValorTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;

  font-size: 14px;
  font-weight: 700;
  color: ${cores.bege};
`
export const CartButton = styled(Button)`
  background-color: ${cores.bege};
  position: unset;
  border-radius: 2px;
`
