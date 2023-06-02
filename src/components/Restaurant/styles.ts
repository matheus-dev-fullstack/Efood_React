import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 472px;
  height: 400px;
  position: absolute;
  border: solid #e66767;
  border-width: 1px 1px 1px 1px;
`
export const Div = styled.div`
  padding: 8px;
  height: 181px;

  p {
    color: ${cores.corTexto};
    font-size: 14px;
  }
`
export const Title = styled.h3`
  color: ${cores.corTexto};
  margin-bottom: 16px;
  font-size: 18px;
`
