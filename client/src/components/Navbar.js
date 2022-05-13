import React, { useState } from 'react';

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <div className="navbar-content">
        {props.children}
      </div>
    </nav>
  )
};




export default Navbar;
