import Tag from '../Tag'
import fechar from '../../assets/close.png'
import pizza from '../../assets/pizza.jpg'
import {
  Overlay,
  CartContainer,
  Sidebar,
  CartItem,
  ValorTotal,
  CartButton
} from './styles'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { remove, close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt="" />
              <div>
                <h3>{item.nome}</h3>
                <p>R$ {item.preco}</p>
              </div>
              <button onClick={closeCart} type="button" />
            </CartItem>
          ))}
        </ul>
        <ValorTotal>
          <span>Valor total</span>
          <span>R$ 35,00</span>
        </ValorTotal>
        <CartButton type="button">Continuar com a entrega</CartButton>
      </Sidebar>
    </CartContainer>
  )
}
export default Cart
