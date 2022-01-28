import React, { useEffect } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import {addItem} from "./actions/itemActions"
import Navbar from './components/Navbar';
import Catalog from './components/Catalog';

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
      <Navbar/>
      <Catalog/>
    </div>
  )
};

export default App;
