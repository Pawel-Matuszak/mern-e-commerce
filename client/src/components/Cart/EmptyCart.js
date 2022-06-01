import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className='empty-cart'>
      <p>your cart is currently empty.</p>
      <p>continue browsing <Link to="/catalog" className='animated-link link-41'>here</Link></p>
    </div>
  )
}

export default EmptyCart