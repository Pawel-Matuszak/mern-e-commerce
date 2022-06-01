import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../../actions/cartActions';

const Product = ({itemDetails}) => {

  const cartItems = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  // console.log(cartItems);


  const addToCart = itemDetails => {
    return () =>{
      //dispatch add to cart with item details
      dispatch(addCartItem(itemDetails))
      console.log(cartItems)
    }
  }
  return (
    <div className='product'>
      <img src={`${process.env.PUBLIC_URL}/res/${itemDetails.url}.jpg`}alt={itemDetails.url} />
      <div className="product-name">{itemDetails.name}</div>
      <div className="product-price">{itemDetails.price/100} USD</div>
      <button onClick={addToCart(itemDetails)}>dadad</button>
    </div>
  ) 
};

export default Product;
