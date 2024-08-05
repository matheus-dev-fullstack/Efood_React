// import { CartContainer, Overlay, Sidebar } from "../Cart/styles"
import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { closeCheckout } from '../../store/reducers/cart'

// Vou criar esse componente e importar no Cart utilizando algum usaState para verificar 
// ou quando for acionado continuar com a compra display none em Cart e exibe Checkout.

const Checkout = () => {
  const { isCheckoutOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch();

  const exitCheckout = () => {
    dispatch(closeCheckout())
  }

  return (
    <S.CartContainer className={isCheckoutOpen ? 'is-open' : ''}>
      <S.Overlay onClick={exitCheckout}/>
      <S.Sidebar>
            <h3>Entrega</h3>
            <form action="POST">
              <div>
                <label htmlFor="">Quem ira receber</label>
                <input type="text" />
              </div>
          </form>
      </S.Sidebar>
    </S.CartContainer>
  )
}

// Criado um componente Checkout, quando for clicado para finalizar a compra em Cart ele dispara CloseCard, 
// e mostra o componente Checkout, porém o que define se o carrinho está fechado ou aberto é no reducer
// ou é possível definir um reducer para checkout
// Criar componente e testar, depois resolver interação com o carrinho

export default Checkout