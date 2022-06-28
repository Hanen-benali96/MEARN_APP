
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { Container,Card,Button, Form } from 'react-bootstrap'
import './DetailsProduct.css'
import  {useDispatch, useSelector} from 'react-redux'
import { addItem} from '../../redux/action/actionCart'
import { useParams } from 'react-router-dom'

const DetailsProduct = () => {
const [loading,setLoading]=useState(true)
const [product,setProduct]=useState(null)
const {id}= useParams();
const dispatch =useDispatch();
const addProduct = (product)=>{
  dispatch(addItem(product));
}

useEffect(() => {
const fetchData=async()=>{
  try {
    const res=await axios.get(`/api/products/product/${id}`)
    setProduct(res.data.product)
    setLoading()
  } catch (error) {
    console.log(error)
  }
}
fetchData()
}, [id])

console.log('product' , product)

  return (

    <div>
  {
    loading ? <h3>Wait...</h3>: <Container>
      <div className='Card-product' >
    <div border="light" style={{ width: '18rem' }}>   
    <img className='img' src={`/uploads/${product.imagesUrl}`}
    width="400px" height="400px" />
   </div>
    <div className='Card-product-1'>
    <div className="display flex-wrap lead fw-bolder">
    <h3 className='display-flex  lead fw-bolder'>{ product.name}</h3>
    </div>
        <div className='col-md-6 text-uppercase '>
   <p> {product.description} </p>
   </div>
            <div className='price'>
    <span  >{ product.price  }dt</span>
          </div>

              
         
        
          <button type="submit" class="btn btn-outline-dark" onClick={()=> addProduct(product) }  >Add to Cart</button> 
              
          <NavLink to='/cart'>
          <button type="submit" class="btn btn-outline-dark">Go to Cart</button>
          
          </NavLink>

          </div>
        
      </div>

        </Container> 
  }

  </div>
  
  )
}

export default DetailsProduct