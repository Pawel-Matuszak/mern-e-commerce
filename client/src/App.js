import React, { useEffect } from 'react';
import axios from "axios";

const App = () => {

  useEffect(()=>{
    axios.get("/home").then((res)=>{
      console.log(res);
    })
  },[])


  return <div>HelloWorld</div>;
};

export default App;
