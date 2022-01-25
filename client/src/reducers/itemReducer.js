const initialState = [
    {name: "Shirt", url: "./photo.png"}
  ]

const itemReducer = (state=initialState, action) =>{
  switch (action.type) {
    case "ADD_ITEM":
      return [action.payload, ...state];
    
    default:
      return state;
  }

}

export default itemReducer