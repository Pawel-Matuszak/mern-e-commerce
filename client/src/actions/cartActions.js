export const addCartItem = ({_id, name, price, url, maxQty, qty}) => {
  //send to the server
  
  return {
    type: "ADD_CART_ITEM",
    payload: {_id, name, price, url, maxQty, qty}
  }
}

export const decCartItem = (_id) => {
  //send to the server
  
  return {
    type: "DECREMENT_QTY",
    payload: _id
  }
}

export const removeCartItem = (_id) => {
  //send to the server

  return {
    type: "REMOVE_CART_ITEM",
    payload: _id
  }
}

export const getCartItems = () => {
  //send to the server

  return {
    type: "GET_CART_ITEMS",
  }
}