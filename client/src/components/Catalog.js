import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import { getItems } from '../actions/itemActions';

const ProductsList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state)=>state.items)

  useEffect(()=>{
    dispatch(getItems())
  },[]);

  return (
    <div className='catalog'>
      {items.map(item => (
        <Product key={item._id} itemDetails={item}/>
      ))}
    </div>
  )
};

export default ProductsList;
