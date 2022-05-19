import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import { addItem, getItems } from '../actions/itemActions';
import BuyThatOneGif from "../images/buythatone_3.gif"

const ProductsList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items)

  useEffect(() => {
    dispatch(getItems())
  }, []);

  return (
    <div className='catalog'>
      <marquee>merch available for limited time only buy my stuff now plz</marquee>
      <h2>catalog</h2>
      <div className="catalog-content">
        {items.map(item => (
          <Product key={item._id} itemDetails={item} />
        ))}
        <div className="buythatone">
          <img src={BuyThatOneGif} alt="buythatone" />
        </div>
      </div>

      {/* <button onClick={()=>dispatch(addItem({name: "berd-shoes", price: 999, url: "shoe-berd"}))}>dodaj</button> */}

    </div>
  )
};

export default ProductsList;
