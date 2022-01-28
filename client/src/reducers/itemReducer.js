const initialState = []

const itemReducer = (state=initialState, action) =>{
  switch (action.type) {
    case "GET_ITEMS":
      state = action.payload
      return state;

    case "ADD_ITEM":
      return [...state, action.payload];
    
    default:
      return state;
  }

}

export default itemReducer