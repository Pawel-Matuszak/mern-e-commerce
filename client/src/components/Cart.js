import React from 'react'
import CartItem from './CartItem'

const Cart = () => {
  return (
    <div className='cart-container'>
      <h1>cart</h1>
      {/* <p>your cart is currently empty.</p>
      <p>continue browsing <a href="">here</a></p> */}

      <div className="items-grid">
        <div className="header">
          <div className="label">QUANTITY</div>
          <div className="label">TOTAL</div>
        </div>
        <div className="items">
          
        <CartItem name="berd hat" qty="1" maxQty="5" price={9999}/>
        
        </div>
        <div className="summary">
          <div className="label">subtotal</div>
          <div className="label price">$22.22</div>
        </div>
        <div className="check-out">
          <p>shipping, taxes, and discounts codes calculated <br/> at checkout.</p>
          <button>update cart</button>
          <button>check out</button>
        </div>
      </div>
    </div>
  )
}

export default Cart