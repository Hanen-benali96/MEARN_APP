import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import './Footer.css'
function Footer() {
  return (
   <footer className='footer' >
        <Container fluid className='bg-dark text-white '  >
          <Row>
            <Col className='text-center py-3' >
                  &Copyright; (HANEN BEN ALI) Your Website 2022
        
            </Col>
          </Row>
        </Container>

   </footer>
  )
}

export default Footer