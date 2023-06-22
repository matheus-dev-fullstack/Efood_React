import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.corTexto};
  position: relative;
  padding: 8px;
  width: 320px;
  height: 338px;

  img {
    width: 100%;
    height: 168px;
    object-fit: cover;
  }
`
export const Infos = styled.div``
export const Name = styled.h3`
  color: ${cores.bege};
  margin-bottom: 8px;
  margin-top: 8px;
  font-size: 16px;
  font-weight: 900;
`
export const Description = styled.p`
  color: ${cores.bege};
  font-size: 14px;
  font-weight: 400;
`

export const Button = styled.button`
  background-color: ${cores.bege};
  color: ${cores.corTexto};
  position: absolute;
  padding: 4px;
  bottom: 8px;
  left: 8px;
  right: 8px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`
