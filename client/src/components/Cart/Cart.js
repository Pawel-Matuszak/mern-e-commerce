import React, { useEffect } from 'react'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'
import GreetingImg from "../../images/greeting_1.gif"
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems } from '../../actions/cartActions'

const Cart = () => {

  const cartItems = useSelector(state=>state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
    console.log(cartItems);
  }, [])
  

  return (
    <div className='cart-container'>
      <h1>cart</h1>
      {(cartItems.length==0) ? <EmptyCart/> : 
        <div className="items-grid">
          <div className="header">
            <div className="label">QUANTITY</div>
            <div className="label">TOTAL</div>
          </div>
          <div className="items">
            {cartItems.map(e=>(
              <CartItem key={e._id} id={e._id} name={e.name} qty={e.qty} maxQty={e.maxQty} price={e.price} url={e.url}/>
            ))}
          </div>
          <div className="cart-bottom-section">
            <img src={GreetingImg} alt="" />

            <div className="summary-wrap">
              <div className="summary">
                <div className="label">subtotal</div>
                <div className="label price">$22.22</div>
              </div>
              <div className="check-out">
                <p>shipping, taxes, and discounts codes calculated at checkout.</p>
                <button>update cart</button>
                <button>check out</button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Cart