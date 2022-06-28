import React from "react";
import { Button, Container, Nav, Navbar,Form ,FormControl, NavDropdown} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/action/authAction";
import {getSearchName}  from  "../redux/action/actionProduct"
function NavBar() {
  const {auth,user} = useSelector(state => state.authReducer);
  const state = useSelector(state => state.handleCart);
  const dispatch = useDispatch();
  // logout
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Navbar bg="dark" variant="dark">
    <Container fluid>
      <Navbar.Brand href="/"> ALI_BABA LES FRERES</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
           <Nav.Link href="/contact" >Contactez-nous</Nav.Link>
           {auth&& (user.role==='admin') &&
          <Nav.Link href="/admin" >Dashbord</Nav.Link>
          }
           
            
              
          <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={e=>dispatch(getSearchName(e.target.value))}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            
        </Nav>    
       
        <Form className="d-flex"  >
                          {auth&& 
                        <Link to='/cart'>
                        <Button className="btn btn-dark" variant='outline-light' type="submit" >
                        <i className="fa-solid fa-cart-shopping"></i>
                            <span className="total-Price" > {state.length} </span>
                        
                        </Button>
                        </Link>
                        }
                    </Form>      
                    
        {auth ? (
          <Button variant='outline-light m-2' onClick={handleLogout}>
            Logout
          </Button>
        ) :  (
        
          <>
        
       
           <Link to='/register'>
              <Button variant='outline-light'><i className="fa-solid fa-user"></i> S'inscrire pour acheter</Button>
            </Link>
          
            <Link to='/login'>
              <Button variant='outline-light m-2'>Login</Button>
            </Link>
             </>
          
        )}
      
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default NavBar;