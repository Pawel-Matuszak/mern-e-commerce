import React from 'react';

const Product = ({itemDetails}) => {
  return (
    <div className='product'>
      <img src={itemDetails.url} alt={itemDetails.url} />
      <div className="product-name">{itemDetails.name}</div>
      <div className="product-price">{itemDetails.price/100} USD</div>
    </div>
  ) 
};

export default Product;
