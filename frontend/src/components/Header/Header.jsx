import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser,FaShoppingCart,FaHome } from "react-icons/fa";
import Logo from "../../assets/logo.png"
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar variant='dark' bg='dark' expand="lg">
      <Container fluid className='ms-5'>
       <LinkContainer to='/'>
       <Navbar.Brand >
            <img src={Logo} alt="shop-logo"/>
            Shop
            </Navbar.Brand>
       </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className='ms-auto'>
            <LinkContainer to='/'>
          <Nav.Link> 
          <FaHome/>
             </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/cart'>
            
            <Nav.Link > 
            <FaShoppingCart/>
            cart
             </Nav.Link>
            </LinkContainer>
              <LinkContainer to='/singin'>
                   <Nav.Link >
                          <FaUser/>
                          sign in
                      </Nav.Link>
              </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header
