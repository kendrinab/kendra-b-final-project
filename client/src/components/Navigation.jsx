import React from 'react';
import { Form, FormControl, Button, Navbar, Nav } from 'react-bootstrap';
import '../images/Logo_7a6fea93.svg';

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Nav.Link href="/">
          <img
            src={require('../images/Logo.7a6fea93.svg')}
            className="logo"
          ></img>
        </Nav.Link>
        <Nav className="mr-auto">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/blog">Posts</Nav.Link>
          <Nav.Link href="#">About Us</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search for a post!"
            className="mr-sm-2"
          />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
};
export default Navigation;
