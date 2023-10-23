import { CartContainer, Overlay, Sidebar } from "../Cart/styles"

// Vou criar esse componente e importar no Cart utilizando algum usaState para verificar 
// ou quando for acionado continuar com a compra display none em Cart e exibe Checkout.

const Checkout = () => {
  return (
    <CartContainer>
      <Overlay/>
      <Sidebar>
            <h3>Entrega</h3>
            <form action="POST">
              <div>
                <label htmlFor="">Quem ira receber</label>
                <input type="text" />
              </div>
          </form>
      </Sidebar>
    </CartContainer>
  )
}

export default Checkout