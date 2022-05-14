import React, { useState } from 'react'

const CartItem = ({url, name, qty, maxQty, price}) => {

  const [qtyVal, setQtyVal] = useState(qty);

  const setValidQty = (value) =>{
    setQtyVal(parseInt(qtyVal)+value);
  }

  return (
    <div className="item">
            
    <div className="details-1">
      <img src={url} alt="" width={88} height={88}/>
      <div className="img-desc">
        <div className="title">{name}</div>
        <button className="remove-item-btn">remove</button>
      </div>
    </div>

    <div className="details-2">
      <span className="qty-counter-wrapper">
        <input type="number" min={0} max={maxQty} className="qty" value={qtyVal}/>
        <span className="inc-btn qty-btn" onClick={()=>setValidQty(1)}>+</span>
        <span className="dec-btn qty-btn" onClick={()=>setValidQty(-1)}>-</span>
      </span>
      <div className="price">${price/100}</div>
    </div>
  </div>
  )
}

export default CartItem