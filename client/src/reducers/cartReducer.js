const initialState = [
  {_id: 12313123, name: "aaa", price: 1233, url: "qweqe", qty: 1, maxQty: 10},
];

const cartReducer = (state=initialState, action) =>{
  switch (action.type) {
    case "GET_CART_ITEMS":
      return state;
    
    case "ADD_CART_ITEM":
      //if item is already in cart increace qty by one
      if(state.find(e=>e._id === action.payload._id)){
        return state.map(e=>{
          if(e=>e._id === action.payload._id){
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

    case "REMOVE_CART_ITEM":
      return state.filter((e)=>e._id!==action.payload._id);

    default:
      return state;
  }
}

export default cartReducer;