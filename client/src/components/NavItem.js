import { Link } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li className={props.className} >
      <Link to={props.link}>{props.children}
        <img src={props.src} alt={props.src} />      
      </Link>
    </li>
  )
}

export default NavItem;