import { GET_ALL_SEND, SEND_INPUT_TO_STORE } from "../types/contactTypes";
 import axios from "axios";

export const sendInputToStore = (input)=>async(dispatch)=>{
    const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
    try {
    const   res= await axios.post('/api/users/send',input,config)
        
        dispatch({
            type: SEND_INPUT_TO_STORE,
            payload :input
        })
    } catch (error) {
      console.log(error)
    }
}
export const getAllSend=()=>async(dispatch)=>{
  try{
  const res = await axios.get('/api/admin/getAllSend')
 
  dispatch({
      type : GET_ALL_SEND ,
      payload : res.data
  })
}   catch(error){
  console.log(error)
}
  
} 