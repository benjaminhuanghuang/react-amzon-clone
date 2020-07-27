export const initialState = {
  basket:[{
    id:"12313123",
    title: "New Apple iPad",
    price:444.44,
    rating:4,
    image:"data:image/webp;base64,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"
  }]
}

function reducer(state, action) {
  console.log(action);
  switch(action.type){
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((item)=>item.id === action.id);
      if(index >=0){
        newBasket.splice(index, 1);

      }
       return {
        ...state,
        basket: newBasket
      };;
      
    default:
      return state;
  }
}

export default reducer;