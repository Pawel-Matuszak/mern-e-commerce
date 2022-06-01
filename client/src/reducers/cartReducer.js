const initialState = [];

const cartReducer = (state=initialState, action) =>{
  switch (action.type) {
    case "GET_CART_ITEMS":
      return state;
    
    case "ADD_CART_ITEM":
      //if item is already in cart increace qty by one
      let exisits = state.find(e=>e._id === action.payload._id)
      if(exisits){
        return state.map(e=>{
          if(e._id === action.payload._id){
            if(e.qty>=1){
              if(e.maxQty<=e.qty) return e;
              e.qty++
            }else{
              e.qty = 1;
            }
          }
          return e;
        })
      }
      return [...state, action.payload];

    case "DECREMENT_QTY":
      return state.map(e=>{
        if(e._id === action.payload){
          if(e.qty<=1) return e;
          e.qty--
        }
        return e;
      })

    case "REMOVE_CART_ITEM":
      return state.filter((e)=>e._id!==action.payload);

    default:
      return state;
  }
}

export default cartReducer;