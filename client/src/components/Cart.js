import React from 'react'

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
        <div className="items">dasdad</div>
        <div className="summary">
          <div className="label">subtotal</div>
          <div className="label price">$22.22</div>
        </div>
      </div>
    </div>
  )
}

export default Cart