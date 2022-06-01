import axios from "axios"

export const addItem = ({name, price, url, maxQty}) => dispatch => {
  axios.post("/products", {name, price, url, maxQty}).then((res)=>{
    dispatch({
      type: "ADD_ITEM",
      payload: res.data
    })
  })
}

export const getItems = () => dispatch => {
  axios.get("/products").then((res)=>{
    dispatch({
      type: "GET_ITEMS",
      payload: res.data
    })
  })
}