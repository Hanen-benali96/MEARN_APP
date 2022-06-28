import {GET_USER} from '../types/UserTypes'

const intialState ={
    users : [],
  
}
const reducer = ( state = intialState , action,payload) => {
    switch (action.type) {
        case GET_USER:
            return ({...state , users : action.payload.users })
           
            
        default:
            return state
         
    }
 
}

export default reducer