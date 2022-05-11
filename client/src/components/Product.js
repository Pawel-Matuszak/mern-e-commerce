import React from 'react';

const Product = ({key, itemDetails}) => {
  return (
    <div className='product'>
      <img src={`${process.env.PUBLIC_URL}/res/${itemDetails.url}.jpg`}alt={itemDetails.url} />
      <div className="product-name">{itemDetails.name}</div>
      <div className="product-price">{itemDetails.price/100} USD</div>
    </div>
  ) 
};

export default Product;
