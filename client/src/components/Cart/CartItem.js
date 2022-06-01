import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, decCartItem, removeCartItem } from '../../actions/cartActions';
import { ReactComponent as Caret } from '../../images/caret-down-solid.svg';

const CartItem = ({id, url, name, qty, maxQty, price}) => {

  const [qtyVal, setQtyVal] = useState(qty);
  const dispatch = useDispatch();

  const setValidQty = (value) =>{
    let newQty = parseInt(qtyVal)+parseInt(value);
    if(newQty==0 || newQty>maxQty) return;
    setQtyVal(newQty);
  }

  const addToCart = itemDetails => {
    return () =>{
      setValidQty(1);
      dispatch(addCartItem(itemDetails))
    }
  }

  const decCart = (id) => {
    return () => {
      setValidQty(-1);
      dispatch(decCartItem(id))
    }
  }

  const removeCart = (id) => {
    return () => {
      dispatch(removeCartItem(id));
    }
  }

  return (
    <div className="item">
            
    <div className="details-1">
      <img src={url} alt="" width={88} height={88}/>
      <div className="img-desc">
        <div className="title">{name}</div>
        <button className="remove-item-btn" onClick={removeCart(id)}>remove</button>
      </div>
    </div>

    <div className="details-2">
      <span className="qty-counter-wrapper">
        <input type="number" min={0} max={maxQty} className="qty" value={qtyVal} readOnly/>
        <span className="inc-btn qty-btn" onClick={addToCart({_id: id, url, name, qty, maxQty, price})}><Caret/></span>
        <span className="dec-btn qty-btn" onClick={decCart(id)}><Caret/></span>
      </span>
      <button className="remove-item-btn remove-item-btn-mobile">remove</button>
      <div className="price">${price/100}</div>
    </div>
  </div>
  )
}

export default CartItem