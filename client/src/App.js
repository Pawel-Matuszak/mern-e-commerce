import React, { useEffect } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import addItem from "./actions/itemActions"

const App = () => {


  const addToDb = ()=>{
    axios.post("/products", {
      name: "berd hoodie",
      price: 12999,
      url: "./res/berd-hoodie"
    }).then((res)=>{
      console.log(res);
    })
    // axios.delete("/products/61f14cbfb5a617b27b2e8b6c")
  }


  return <div>HelloWorld
    <button onClick={addToDb}>Add</button>
  </div>;
};

export default App;
