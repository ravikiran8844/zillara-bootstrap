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
      <Image className='img-fluid zillara-logo' width={260} height={50} src="/zillara_logo.png" alt='zillara logo' />
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
            <Nav.Link href="#">
              <div>
                <div className='d-none d-lg-block text-lg-center'>
                  <Image src="/stores.png" height={35}  width={35} alt='STORES' />               
                </div>
                <div>
                STORES
                </div>
              </div>
              </Nav.Link>
              <Nav.Link href="#">
              <div>
                <div className='d-none d-lg-block text-lg-center'>
                  <Image src="/account.png" height={35}  width={35} alt='STORES' />               
                </div>
                <div>
                ACCOUNT
                </div>
              </div>
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;