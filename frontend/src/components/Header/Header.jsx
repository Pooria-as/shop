import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser,FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header>
        <Navbar variant='dark' bg='dark' expand="lg">
      <Container fluid className='ms-5'>
        <Navbar.Brand href="/">Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className='ms-auto'>
          <Nav.Link href="/"> 
            Home
             </Nav.Link>
            <Nav.Link href="/cart"> 
            <FaShoppingCart/>
            cart
             </Nav.Link>
            <Nav.Link href="#/singIn">
            <FaUser/>
            sign in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header
