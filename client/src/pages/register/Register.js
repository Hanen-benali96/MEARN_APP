import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../redux/action/authAction";

function Register() {
  const [data, setData] = useState({ name: "", email: "",address1:"",address2:"",country:"",phone:"",zipCode:"", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // handleChange
  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // handleSubmit
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register(data, navigate))
  };
  return (
    <Container className='mt-5'>
      <h2 className='shadow-sm p-3 m-5 text-center'>Register</h2>
      <Row>
        <Col lg={5} md={6} sm={12} className='p-5 m-auto shadow-sm rounded-lg'>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicText'>
              <Form.Control
                type='text'
                placeholder='Enter name'
                name='name'
                onChange={handleChange}
              />
              
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Control
                type='email'
                placeholder='Enter email'
                name='email'
                onChange={handleChange}
              />
            </Form.Group>
           
            <Form.Group className='mb-3' controlId='formBasicAddress'>
              <Form.Control
                type='Address1'
                placeholder='Enter Address'
                name='address1'
                onChange={handleChange}
              />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicAddress2'>
              <Form.Control
                type='Address2'
                placeholder='Enter Address'
                name='address2'
                onChange={handleChange}
              />
              
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasiccountry'>
              <Form.Control
                type='country'
                placeholder='Enter country'
                name='country'
                onChange={handleChange}
              />
              </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPhone'>
              <Form.Control
                type='phone'
                placeholder='Enter phone'
                name='phone'
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicZipCode'>
              <Form.Control
                type='zipCode'
                placeholder='Enter zipCode'
                name='zipCode'
                onChange={handleChange}
              />
            </Form.Group>
           
           
           


            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Control
                type='password'
                placeholder='Password'
                name='password'
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant='dark w-100 mb-3' type='submit'>
              register
            </Button>
          </Form>
          <p>
            Have an account ? <Link to='/login'>Sign in</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;