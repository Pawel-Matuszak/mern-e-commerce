import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navbar-list'>
        <li>home</li>
        <li>catalog</li>
        <li>contact</li>
      </ul>
      <div className="cart">cart</div>
    </div>
  )
};

export default Navbar;
