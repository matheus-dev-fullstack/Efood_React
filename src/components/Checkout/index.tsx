import { CartContainer, Overlay, Sidebar } from "../Cart/styles"


const Checkout = () => {
  return (
    <CartContainer>
      <Overlay/>
      <Sidebar>
          <form action="POST">Teste</form>
      </Sidebar>
    </CartContainer>
  )
}

export default Checkout