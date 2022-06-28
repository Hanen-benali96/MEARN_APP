import  {ADDITEM, DELITEM} from "../types/CartTypes"
const cart = [];
const handleCart = (state = cart, action) =>{
    const product = action.payload;
switch (action.type) {
    case ADDITEM :
        return[
       ...state,
       action.payload
        ]
    break;
   
    case DELITEM :
        return state = state.filter((product)=>{
            return product.id !== action.payload.id        })
    break;
     default:  
      return  state
  
    }
}
 export default handleCart