import React, { useState } from 'react';
import {ReactComponent as SVGdropdown} from "../images/svgexport-2.svg";
import CartImg from "../images/checkout_small.webp";
import TitleImg from "../images/black_logo_130x.webp";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavDropdown icon={<SVGdropdown/>}>
        <NavItem className="dropdown-item">1</NavItem >
        <NavItem className="dropdown-item">2</NavItem >
      </NavDropdown>
      <NavItem className="title" src={TitleImg}/>
      <NavItem className="cart" src={CartImg}/>
    </nav>
  )
};

const NavItem = (props) => {
  return (
    <li className={props.className}>
      <a href="">{props.children}
        <img src={props.src} alt={props.src} />      
      </a>
    </li>
  )
}
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

export default Navbar;
