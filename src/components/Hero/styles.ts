import styled from "styled-components"
import { cores } from "../../styles"

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-weight: bold;
`
export const Div = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  position: relative;
  // max-width: 1024px;
  // margin: 0 auto;
`
export const Text = styled.div`
  height: 100%;
  position: relative;
  max-width: 1024px;
  margin: 0 auto;
`
export const TipoCardapio = styled.span`
  position: absolute;
  top: 25px;
  font-weight: 100;
  font-size: 32px;
  font-family: Roboto;
  color: ${cores.branco};
`
export const NomeRestaurant = styled.h3`
  position: absolute;
  bottom: 32px;
  font-weight: 900;
  font-size: 32px;
  color: ${cores.branco};
`
