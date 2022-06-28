import axios from "axios";
import { EDIT_USER, GET_USER } from "../types/UserTypes";


export const getUser =()=>async(dispatch)=>{
  try {
      const res = await axios.get('/api/admin/getusers')
 
      dispatch({
          type : GET_USER ,
          payload : res.data
      })
  } catch (error) {
     console.log(error) 
  }
 
 }
 
export const  EditUser = (edituser,id) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.put(`/api/users/edituser/${id}`, { edituser }, config);
    dispatch({
      type: EDIT_USER,
      payload: res.data,
    
    });
  } catch (error) {
    console.log(error);
  }
};
export const EditProfile = (edituser, id) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.put(`/api/profile/editeprofile/${id}`, { edituser }, config);
    dispatch({
      type: EDIT_USER,
      payload: res.data,
    
    });
  } catch (error) {
    console.log(error);
  }
};