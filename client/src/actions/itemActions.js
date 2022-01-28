export const addItem = (item) =>{
  return{
    type: "ADD_ITEM",
    payload: item
  }
}

export const getItems = () => {
  return{
    type: "GET_ITEMS"
  }
}