const NavItem = (props) => {
  return (
    <li className={props.className} >
      <a href="">{props.children}
        <img src={props.src} alt={props.src} />      
      </a>
    </li>
  )
}

export default NavItem;