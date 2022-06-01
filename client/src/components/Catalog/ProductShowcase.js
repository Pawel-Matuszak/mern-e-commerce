import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, decCartItem, removeCartItem } from '../../actions/cartActions';

//itemDetails: _id, name, url, price, qty, maxQty
const ProductShowcase = ({itemDetails}) => {
  // console.log(itemDetails);

  // const cartItems = useSelector((state) => state.cart)
  // const dispatch = useDispatch();
  
  // const addToCart = itemDetails => {
  //   return () =>{
  //     dispatch(addCartItem(itemDetails))
  //   }
  // }

  // const decCart = (id) => {
  //   return () => {
  //     dispatch(decCartItem(id))
  //   }
  // }

  // const removeCart = (id) => {
  //   return () => {
  //     dispatch(removeCartItem(id));
  //   }
  // }

  return (
    <div>
       {/* <button onClick={addToCart({...itemDetails, qty: 1})}>++++</button>
      <button onClick={decCart(itemDetails._id)}>----</button>
      <button onClick={removeCart(itemDetails._id)}>remove</button> */}
    </div>
  )
}

export default ProductShowcase