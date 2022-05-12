import React, { useState } from 'react';
import {ReactComponent as SVGdropdown} from "../images/svgexport-2.svg";
import CartImg from "../images/checkout_small.webp";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavDropdown icon={<SVGdropdown/>}>
        <NavItem>1</NavItem>
        <NavItem>2</NavItem>
      </NavDropdown>
      <div className="title">berd</div>
      <div className="cart"><img src={CartImg} alt={CartImg}/></div>
    </nav>
  )
};

const NavDropdown = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="menuwrap">
      <span className="navIcon" onClick={()=>{setOpen(!open)}}>{props.icon}</span>
      <ul className='navbar-dropdown'>
        {open && props.children}
      </ul>
    </div>
  )
}

const NavItem = (props) => {
  return (
    <li className="dropdown-item">
      <a href="">{props.children}
        <img src={props.src} alt={props.src} />      
      </a>
    </li>
  )
}

export default Navbar;
