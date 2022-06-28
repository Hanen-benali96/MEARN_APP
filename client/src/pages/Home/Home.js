import React from 'react';
import { Col, Container, Row,Carousel,Button } from 'react-bootstrap';
import './Home.css'
import {axios} from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useSelector } from 'react-redux';


function Home() {
  const products =useSelector((state)=>state.productReducer.products)
 const searchName=useSelector(state=>state.productReducer.searchName)


 return (
      <div >
        <Container >
                  <h1>Nouvelle Arrivage</h1>
      
                       <Row>
                         {products.filter(p=>p.name.toLowerCase().includes(searchName.toLowerCase().trim())).map((p)=>(
                          <Col key={p._id} sm={12} md={6} lg={4}> 
                          <ProductCard p={p} />
                      
                          </Col>
                         ))}
                  
                       </Row>
                       
             </Container>
      </div>
    );
  }
  export default Home;