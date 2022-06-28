import {  ADD_PRODUCT, GET_PRODUCT, SEARCH_BY_NAME } from "../types/productTypes";
const intialState ={ 
    products : [],
    searchName:"",


}
const reducer = ( state = intialState , action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return ({...state , products : action.payload.products });
         
        //     case ADD_PRODUCT: return {
        //         ...state, products:[...state.products, {
        //             id:Math.random(),  process:false, newproduct:action.payload}]
        //    };
          case SEARCH_BY_NAME:
            return{
                ...state,searchName: action.payload
                       }
        default:
            return state
            
    }
 
}

export default reducer