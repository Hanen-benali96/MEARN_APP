import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import './contact.css'

import  {CONTACT_KEY} from '../../redux/reducers/contactReducer'
import {sendInputToStore} from '../../redux/action/contactAction'
import {useDispatch,useSelector} from 'react-redux'
import Swal from 'sweetalert2'
function Contact() {
const dispatch=useDispatch()

  const [input,setInput]=useState({
    name:'',
    email:'',
    phone:'',
    message:''
  })
  const handlechange = (e) =>{
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
      dispatch(sendInputToStore(input))
      setInput({
        name:'',
        email:'',
        phone:'',
        message:''
      })
  }
      const viewContact = useSelector((state)=>{
      return  state[CONTACT_KEY]
      })

    





 
  
  return (
    
    <div>
    <pre></pre>
      <div className='container'>
        <div className='row'>
          <div className='col-12 p-3'>
          <h1>Have Some Quetion?</h1>
          <hr/>
          </div>
          </div>    
          <div className='rows'>
            <div className='contact col-ms 5'>
          <img src='https://media.istockphoto.com/photos/and-mail-picture-id164142839?k=20&m=164142839&s=612x612&w=0&h=4jKSfCOwa8Y0kOrBZ2RImjNpqd1nReAzmJ-D9FHxRn8=' alt="Contact Us" />
            </div>
            <div className='formaContact'>
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Full name</Form.Label>
      <Form.Control
                type='text'
                placeholder='Enter Full name'
                name='name'
                value={input.name} onChange={handlechange}
              required />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" name='email' value={input.email} onChange={handlechange} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Phone</Form.Label>
      <Form.Control
                type='number'
                placeholder='Enter your Phone'
                name='phone'
                value={input.phone} onChange={handlechange}
              required />
              </Form.Group>
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={5} name='message' value={input.message} onChange={handlechange} required />
      </Form.Group>
      <Button variant='dark w-100 mb-3' type='submit'>
              SEND
            </Button>
            {
              (viewContact.name.length===0)? null :
                   alert(input(Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Message send successfully',
      showConfirmButton: false,
      timer: 1500
    })))
              
            }
    </Form>
            </div>
          </div>
  </div>
    </div>
  )
}

export default Contact