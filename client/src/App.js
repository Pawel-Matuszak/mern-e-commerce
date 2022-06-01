import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import {addItem, getItems} from "./actions/itemActions"
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
import ProductShowcase from './components/Catalog/ProductShowcase';

const App = () => {
  const items = useSelector(state=>state.items)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getItems())
  }, [])
  
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

          {items.map(e=>(
            <Route path={e.url} element={<ProductShowcase/>} key={e._id}/>
          ))}

          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
};

export default App;
