import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  padding-top: 56px;
  padding-bottom: 120px;
  width: 100%;
  background-color: ${cores.corFundo};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 321px);
  grid-column-gap: 32px;
  grid-row-gap: 48px;
  width: 100%;
  align-content: center;
  justify-content: center;
`
