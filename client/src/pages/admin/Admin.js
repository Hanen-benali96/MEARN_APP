import React,{useState,useEffect} from 'react'
import {Button,Col,Row, Table} from 'react-bootstrap'
import Sidebar from '../../components/sidebar/Sidebar'
import './Admin.css'
import Widget from '../../components/widget/Widget'
import ProductList from '../../components/admin/AdminCards/ProductList'

import {useDispatch, useSelector} from 'react-redux'
import Addproduct from '../../components/admin/Events/Adproduct'







function Admin() {
 const products =useSelector((state)=>state.productReducer.products)
 

  return (
    <div className='home'>
         <Sidebar/>
        <div className='homeContainer'>
         <div className='widgets'>
         <Widget type='user' />
         <Widget type='order' />
         <Widget type='earning' />
         <Widget type="balance" />
         </div>
         <div className='listContainer'></div>

         
            <div className='List'>
                    
           <h2>Product List </h2> 
            <div className='btn-add'> 
             <Addproduct/>

          
             </div></div>
            <Row>
                         {products.map((p)=>(
                          <Col key={p._id} sm={12} md={6} lg={4}> 
                          <ProductList p={p} />
                      
                          </Col>
                           ))}
                      </Row>
               </div>
          
              
    </div>
  )
}

export default Admin