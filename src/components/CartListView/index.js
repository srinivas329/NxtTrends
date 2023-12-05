import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value

      const total = cartList.map(each => each.price * each.quantity)
      const totalProducts = total.length
      const totalAmount = total.reduce((a, b) => a + b, 0)

      const onClickRemoveAll = () => {
        const emptyCartList = []
        removeAllCartItems(emptyCartList)
      }

      return (
        <>
          <button
            onClick={onClickRemoveAll}
            type="button"
            data-testid="remove"
            className="remove-all-btn"
          >
            Remove all
          </button>
          <ul className="cart-list">
            {cartList.map(eachCartItem => (
              <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
            ))}
          </ul>
          <div className="total-bill-card">
            <h1 className="total">
              Order Total: <span>Rs {totalAmount}/-</span>
            </h1>
            <p>{totalProducts} item in cart</p>
            <button type="button" className="checkout-btn">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
