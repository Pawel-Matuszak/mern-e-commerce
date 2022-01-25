import React, { useEffect } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import addItem from "./actions/itemActions"

const App = () => {

  const items = useSelector((state)=>state.items);
  const dispatch = useDispatch()
  console.log(items);

  useEffect(()=>{
    // axios.get("/home").then((res)=>{
    //   console.log(res);
    // })

    dispatch(addItem({name: "qwe", url: "./ddd.png"}))
  },[])


  return <div>HelloWorld</div>;
};

export default App;
