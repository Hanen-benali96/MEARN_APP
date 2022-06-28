
import React,{useState} from 'react'
import { Button,Modal,Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { updateProduct } from '../../../redux/action/actionProduct'
const Editproduct = ({p }) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(p.name);
  const [price, setPrice] = useState(p.price);
  const [stock, setStock] = useState(p.stock);
  const [rating, setRating] = useState(p.rating);
  const [imagesUrl,setImagesUrl]= useState(p.imagesUrl)
  const [id, setId ]=useState(p._id)
  const dispatch=useDispatch()
  const editProduct= async ()=>{
  const data= new FormData();
  data.append('myImage',imagesUrl);
  data.append('name',name)
  data.append('price',price)
  data.append('rating',rating)
  data.append('stock',stock)
  dispatch(updateProduct(data,id))
 }

 const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div>
    <Button variant="danger" onClick={handleShow}>
      edit Product
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
              value={name}
              onChange={(e)=>setName(e.target.value)}
              
             />
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
              value={price}
              placeholder="price product"
              onChange={(e)=>setPrice(e.target.value)}
              />
          </Form.Group>
         
             
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label> Stock </Form.Label>
            <Form.Control
              type="Number"
              placeholder="Stock"
              value={stock}
              onChange={(e)=>setStock(e.target.value)}
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label> Rating</Form.Label>
            <Form.Control
              type="Number"
              placeholder="Stock"
              value={rating}
              onChange={(e)=>setRating(e.target.value)}
              />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={editProduct}>
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
);
}
  
export default Editproduct