import { SEND_INPUT_TO_STORE } from "../types/contactTypes";
export const CONTACT_KEY = 'contactStore'
const initialState = {
    name:'',
    email:'',
    phone:'',
    message:''
}

const reducer = (state= initialState,action )=>{
    const {type,payload} = action 

 switch(type){
      case SEND_INPUT_TO_STORE:
        return{
            ...state,
            ...payload
        }
        default: 
        return state
 }
}
export default reducer