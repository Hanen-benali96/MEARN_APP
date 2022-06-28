import axios from  'axios'
import { GET_PRODUCT , DELETE_PRODUCT, ADD_PRODUCT, EDIT_PRODUCT, SEARCH_BY_NAME } from '../types/productTypes'
export const getProduct=()=>async(dispatch)=>{
    try{
    const res = await axios.get('/api/products/')
   
    dispatch({
        type : GET_PRODUCT ,
        payload : res.data
    })
}   catch(error){
    console.log(error)
}
    
} 

export const getAllProducts=()=>async(dispatch)=>{
    try{
    const res = await axios.get('/api/admin/getAllProducts')
   
    dispatch({
        type : GET_PRODUCT ,
        payload : res.data
    })
}   catch(error){
    console.log(error)
}
    
} 

export const getProductById=(_id)=>async(dispatch)=>{
    try{
    const res = await axios.get(`/api/admin/product/${_id}`)
   
    dispatch({
        type : GET_PRODUCT ,
        payload : res.data
    })
}   catch(error){
    console.log(error)
}
    
} 
export const AjouteProduct=(data)=>async(dispatch)=>{
    const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
    try {
    const   res= await axios.post('/api/admin/addProduct',data,config)
    console(res.data)
        dispatch({
            type: ADD_PRODUCT,
            payload :data
        })
    } catch (error) {
      console.log(error)
    }
}
export const DeleteProduct=(id)=>async(dispatch)=>{
    const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
    try {
      const res =  await axios.delete(`/api/admin/delete/product/${id}`,config)
        dispatch({
            type :GET_PRODUCT ,
            payload :  id
        })
    }   catch(error){
        console.log(error)
    }
        
}

export const updateProduct =(product , id)=>async(dispatch)=>{
    const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
    try {
        
       const res = await axios.put(`/api/admin/update/product/${id}` ,product,config) 
       dispatch({type:EDIT_PRODUCT,
        payload : product
            
    })
    } catch (error) {
       console.log(error) 
    }

}
export const getProductDetails=(product, id)=>async(dispatch)=>{
    try {
      const res = await axios.get(`/api/products/product/${id}`, product)

        dispatch({
        type : GET_PRODUCT ,
        payload : res.data
    })
    } catch (error) {
        console.log(error)
    }
}

export const getSearchName=(name)=>{
  return {
    type:SEARCH_BY_NAME,
    payload:name
  }
}


