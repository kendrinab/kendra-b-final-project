import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import LogoImage from '../images/Logo_7a6fea93.png';
import Search from './Search.jsx';

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Nav.Link href="/">
          <img src={LogoImage} className="logo"></img>
        </Nav.Link>
        <Nav className="mr-auto">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Search />
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
