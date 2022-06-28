
import React,{useState,useEffect} from 'react'
import {Card, Row, Col, Button} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component"
import { Link, useParams } from 'react-router-dom'
import { DeleteProduct } from '../../redux/action/actionProduct'
import  {useSelector,useDispatch} from 'react-redux'
import './ProductCard.css'
import { axios } from 'axios'

const Product = ({p}) => {
 



  return ( 
    <div >
   <Link to={`/product/${p._id}`}> 
    <Card className=" card-product  my-3 p-3 rounded" style={{ width: '18rem' }} >
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
</Link>


</div>
  )
}

export default Product