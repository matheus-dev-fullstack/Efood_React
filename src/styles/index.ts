import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const cores = {
  corTexto: '#E66767',
  corFundo: '#F5F5F5',
  bege: '#FFEBD9',
  branco: '#ffffff'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    }

    body {
      background-color:${cores.corTexto};
    }

    .container {
      padding: 0 auto;
      max-width: 1024px
      margin: auto;
      // padding-left: 15%;
      // padding-right: 15%;
    }
`
export const MainContainer = styled.div`
  display: flex;
  max-width: 1024px;
  width: 100%;
`
