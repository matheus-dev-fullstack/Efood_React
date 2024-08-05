import styled from "styled-components"
import { cores } from "../../styles"
import backgroundHeader from "../../assets/Vector.png"

export const Header = styled.header`
  background-image: url(${backgroundHeader});
`
export const Div = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding-top: 64px;
  padding-bottom: 64px;
  max-width: 1024px;
  color: ${cores.corTexto};
  position: relative;
`
export const Home = styled.a`
  text-decoration: none;
  color: ${cores.corTexto};
  font-weight: 900;
  font-size: 18px;
  cursor: pointer;
  position: absolute;
  left: 0;
`
export const Logo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`

export const QuantidadeProdutos = styled.span`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 900;

  letter-spacing: 0em;

  position: absolute;
  right: 0;
`
