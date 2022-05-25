import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import {addItem} from "./actions/itemActions"
import {ReactComponent as SVGdropdown} from "./images/svgexport-2.svg";
import CartImg from "./images/checkout_small.webp";
import TitleImg from "./images/black_logo_130x.webp";
import CatalogImg from "./images/catalog.webp";
import HomeImg from "./images/home.webp";
import Navbar from './components/Navbar/Navbar';
import Catalog from './components/Catalog/Catalog';
import Cart from './components/Cart/Cart';
import NavDropdown from "./components/Navbar/NavDropdown"
import NavItem from "./components/Navbar/NavItem"
import Footer from './components/Footer/Footer';
import Home from "./components/Home/Home";
import PageNotFound from './components/PageNotFound/PageNotFound';

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
    <BrowserRouter>
      <div className='container'>
        <Navbar>
          <NavDropdown icon={<SVGdropdown/>}>
            <NavItem className="dropdown-item" src={HomeImg} link="/"></NavItem>
            <NavItem className="dropdown-item" src={CatalogImg} link="/catalog"></NavItem>
          </NavDropdown>
          <NavItem className="title" src={TitleImg} link="/"/>
          <NavItem className="cart" src={CartImg} link="/cart"/>
        </Navbar>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="catalog" element={<Catalog/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
};

export default App;
