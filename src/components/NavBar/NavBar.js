"use client"


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import Image from 'next/image'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="#home">
      <Image className='img-fluid' width={260} height={50} src="/zillara_logo.png" alt='zillara logo' />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />


        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
            <Nav.Link href="#">Our Story</Nav.Link>
            <Nav.Link href="#">Zilara Siver</Nav.Link>
            <Nav.Link href="#">Contact Us</Nav.Link>

          </Nav>
          <Nav className="mx-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#">STORES</Nav.Link>
            <Nav.Link href="#">ACCOUNT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;