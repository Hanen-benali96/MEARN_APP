import React, {useEffect,useState}from 'react'
import {Card} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {DeleteProduct} from "../../../redux/action/actionProduct"

import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component"
import './Product.css'
import Editproduct from '../Events/Editproduct';
function ProductList({p}) {
  const dispatch=useDispatch()
  const handledelete =()=>{
    dispatch(DeleteProduct(p._id))
  }
 


 
  return (
    <div>
     <Card className=" card-products  my-3 p-3 rounded" style={{ width: '18rem' }} >
       <Card.Img  src={`uploads/${p.imagesUrl}`}  />
    
      <Card.Body>
        <a href={`/product/${p._id}`}  style={{ textDecoration:'none' }} >
          <Card.Title as="div" className='text-center text-black' >
            <strong> {p.name} </strong>
          </Card.Title>
        </a>
        <ReactStars
      count={5}
      size={24}
      value={p.rating}
     
    />

  
  

        <Card.Text as='h3' className='text-center'>
          {p.price}dt 
        </Card.Text>

      </Card.Body>
        </Card>
       <div className='edit-delet'> 
       <Editproduct
      p={p}
       />
      <button className=' btn btn-outline-success' onClick={handledelete} >delete</button>
           </div>
        </div>

  )
}

export default ProductList