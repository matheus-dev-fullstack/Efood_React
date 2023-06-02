import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const cores = {
  corTexto: '#E66767',
  corFundo: '#F5F5F5',
  corPrincipal: '#FFEBD9',
  branco: '#ffffff'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

    body{
      background-color:${cores.corFundo}
    }

    // overflow-y: hidden;
  }
`
export const MainContainer = styled.div`
  display: flex;
`
export const Button = styled.button`
  display: flex;
  border-radius: 50%;
  border: none;
  height: 45px;
  width: 45px;
  justify-content: center;
  align-items: center;
  background-color: ${cores.corFundo};

  :hover {
    background-color: #e6e6e6;
  }
  img {
    width: 50%;
    height: 50%;
  }
`
