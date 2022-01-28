const initialState = [
    {_id: "1", name: "Shirt", url: "./photo.png"}
  ]

const itemReducer = (state=initialState, action) =>{
  switch (action.type) {
    case "GET_ITEMS":
      return state;

    case "ADD_ITEM":
      return [action.payload, ...state];
    
    default:
      return state;
  }

}

export default itemReducer