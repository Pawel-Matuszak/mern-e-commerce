import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import { addItem, getItems } from '../actions/itemActions';

const ProductsList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items)

  useEffect(() => {
    dispatch(getItems())
  }, []);

  return (
    <div className='catalog'>
      <div className="catalog-content">
        {items.map(item => (
          <Product key={item._id} itemDetails={item} />
        ))}
      </div>

      {/* <button onClick={()=>dispatch(addItem({name: "berd-shoes", price: 999, url: "shoe-berd"}))}>dodaj</button> */}

    </div>
  )
};

export default ProductsList;