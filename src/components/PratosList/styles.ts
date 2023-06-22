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
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background-color: rgba(0, 0, 0, 0.8);

  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.visible {
    display: flex;
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
export const ModalContent = styled.div`
  position: relative;
  background-color: ${cores.corTexto};
  display: flex;
  padding: 34px;

  z-index: 1;

  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  color: ${cores.branco};
`
export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;

  h3 {
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    margin-bottom: 32px;
    width: 630px;
  }
  span {
    font-size: 14px;
  }
`
export const Button = styled.button`
  background-color: ${cores.bege};
  color: ${cores.corTexto};
  font-weight: 700;
  padding: 4px;
  width: 208px;
  margin-top: 20px;
  border: none;
  cursor: pointer;
`
export const Close = styled.img`
  position: absolute;
  z-index: 2;
  max-width: 16px;
  max-height: 16px;
  top: 8px;
  right: 8px;
  cursor: pointer;
`
export const ModalImage = styled.img`
  display: block;
  object-fit: cover;
  width: 280px;
  height: 280px;
  border-radius: 4px;
`
