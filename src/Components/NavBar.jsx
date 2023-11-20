 
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
      <Navbar.Brand href="#home">Task 7</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/user">Users</Nav.Link>
          <Nav.Link href="/taskLi">TaskList</Nav.Link>
          <Nav.Link href="/ta">Task</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar;