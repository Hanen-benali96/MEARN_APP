import React, { useState } from 'react';

import {Modal,Form,Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {AjouteProduct} from '../../../redux/action/actionProduct'
function Addproduct() {
  const [show, setShow] = useState(false);
  const dispatch=useDispatch()
const [name,setName]=useState('')
const [description,setDescription]=useState('')
const [price,setPrice]=useState('')
const [stock,setStock]=useState('')
const [rating,setRating]=useState(1)
const [category,setCategory]=useState('')
const [imagesUrl,setImagesUrl]=useState(null)

  const AddProduct= async ()=>{
  const data= new FormData();
  data.append('myImage',imagesUrl);
  data.append('name',name)
  data.append('price',price)
  data.append('rating',rating)
  data.append('stock',stock)
  data.append('description',description)
  data.append('category',category)
  dispatch(AjouteProduct(data))
 }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
      Add Product
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label> Name  </Form.Label>
            <Form.Control
              type="text"
              placeholder="name product"
             
              onChange={(e)=>setName(e.target.value)}
              
             />
          </Form.Group>
         
          <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label> Description </Form.Label>
              <Form.Control as="textarea" rows={3}  
              onChange={(e)=>setDescription(e.target.value)}  />
            </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label> image  </Form.Label>
            <Form.Control
              type="file"
              placeholder="image product"
              onChange={e=>setImagesUrl(e.target.files[0])}
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
           <Form.Label>Price </Form.Label>
            <Form.Control
              type="number"
              placeholder="price product"
              onChange={(e)=>setPrice(e.target.value)}
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label> Category  </Form.Label>
            <Form.Control
              type="text"
              placeholder="category"
             
              onChange={(e)=>setCategory(e.target.value)}
              
             />
          </Form.Group>
             
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label> Stock </Form.Label>
            <Form.Control
              type="Number"
              placeholder="Stock"
          
              onChange={(e)=>setStock(e.target.value)}
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label> Rating</Form.Label>
            <Form.Control
              type="Number"
              placeholder="Stock"
            
              onChange={(e)=>setRating(e.target.value)}
              />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={AddProduct}>
          save 
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}


  
export default Addproduct