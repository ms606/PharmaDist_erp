import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {  Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {
  
    return (  
        <header>
            <Navbar bg="primary" variant='dark' expand="lg" collapseOnSelect>
              <Container>
                <LinkContainer to='/'>
                <Navbar.Brand>BITS PHARM</Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto">
                  <Nav.Link href='/stationeryorder'>Stationary</Nav.Link> 
                 <NavDropdown title="Employee" id='employee-navbar-nav'>
                  <NavDropdown.Item href='/employeeprofile'>Profile</NavDropdown.Item>
                  <NavDropdown.Item href='/employeeapplication'>Application</NavDropdown.Item>'
                 </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link eventKey={1} href="/myaccount">
                    My Account
                </Nav.Link>
                <Nav.Link href="/login">Sign Out</Nav.Link>
                </Nav>
                </Container> 
            </Navbar>
        </header>
    )
}

export default Header