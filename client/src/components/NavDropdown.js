import { useState } from "react";
import {ReactComponent as SVGclose} from "../images/svgexport-1.svg";
import { motion } from "framer-motion";

const NavDropdown = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar-wrap">
      <span className="navIcon" onClick={()=>{setOpen(!open)}}>{props.icon}</span>
      {open && 
      <motion.ul className='navbar-dropdown' animate={{x:300}} transition={{duration: .5}}>
        <motion.span animate={{y:[50, 0], opacity:[0, 1]}} transition={{delay: .3, duration: .5}}>
          <li className="dropdown-item dropdown-exit" onClick={()=>setOpen(false)}><SVGclose/></li>
          {props.children}
        </motion.span>
        <div className="cover" onClick={()=>setOpen(false)}></div>
      </motion.ul>}
    </div>
  )
}

export default NavDropdown;