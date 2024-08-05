import styled from "styled-components"
import { cores } from "../../styles"

export const Container = styled.div`
  padding: 80px 0;
  width: 100%;
  background-color: ${cores.corFundo};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 472px);
  grid-column-gap: 80px;
  grid-row-gap: 48px;
  width: 100%;
  align-content: center;
  justify-content: center;
`

export const Item = styled.li`
  width: auto;
  height: auto;
`
