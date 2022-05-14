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
        <div className="items">
          
          <div className="item">
            
            <div className="details-1">
              <img src="" alt="" width={88} height={88}/>
              <div className="img-desc">
                <div className="title">berd hat</div>
                <button className="remove-item-btn">remove</button>
              </div>
            </div>

            <div className="details-2">
              <input type="number" min={0} max={10} className="qty" />
              <div className="price">$22.22</div>
            </div>
          </div>
        
        </div>
        <div className="summary">
          <div className="label">subtotal</div>
          <div className="label price">$22.22</div>
        </div>
      </div>
    </div>
  )
}

export default Cart