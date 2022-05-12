import { useState } from "react";
import {ReactComponent as SVGclose} from "../images/svgexport-1.svg";

const NavDropdown = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar-wrap">
      <span className="navIcon" onClick={()=>{setOpen(!open)}}>{props.icon}</span>
      {open && 
      <ul className='navbar-dropdown'>
        <li className="dropdown-item dropdown-exit" onClick={()=>setOpen(false)}><SVGclose/></li>
        {props.children}
      </ul>}
    </div>
  )
}

export default NavDropdown;