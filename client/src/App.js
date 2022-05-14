import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import {addItem} from "./actions/itemActions"
import Navbar from './components/Navbar';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import NavDropdown from "./components/NavDropdown"
import NavItem from "./components/NavItem"
import {ReactComponent as SVGdropdown} from "./images/svgexport-2.svg";
import CartImg from "./images/checkout_small.webp";
import TitleImg from "./images/black_logo_130x.webp";
import CatalogImg from "./images/catalog.webp";
import HomeImg from "./images/home.webp";

const App = () => {

 
  // const addToDb = ()=>{
  //   axios.post("/products", {
  //     name: "berd hoodie",
  //     price: 12999,
  //     url: "./res/berd-hoodie"
  //   }).then((res)=>{
  //     console.log(res);
  //   })
  // }
  
  return (
    <div className='container'>
      <Navbar>
        <NavDropdown icon={<SVGdropdown/>}>
          <NavItem className="dropdown-item" src={HomeImg}></NavItem>
          <NavItem className="dropdown-item" src={CatalogImg}></NavItem>
        </NavDropdown>
        <NavItem className="title" src={TitleImg}/>
        <NavItem className="cart" src={CartImg}/>
      </Navbar>
      {/* <Catalog/> */}
      <Cart/>
    </div>
  )
};

export default App;
