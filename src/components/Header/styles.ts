import styled from 'styled-components'
import { cores } from '../../styles'
import backgroundHeader from '../../assets/Vector.png'

export const Header = styled.header`
  background-image: url(${backgroundHeader});
  height: 384px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Logo = styled.img`
  position: absolute;
  width: 125px;
  height: 57.5px;
  // left: 621px;
  top: 40px;
`

export const Titulo = styled.h1`
  position: absolute;
  width: 539px;
  height: 84px;
  // left: 414px;
  top: 236px;
  // align-itens: center;

  color: ${cores.corTexto};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
`
