import React from 'react';
// import { useLocation, useHistory } from 'react-router-dom';
import { FormControl, Button, Form, Navbar, Nav } from 'react-bootstrap';
// import { AppContext } from '../context/AppContext';

const Navigation = () => {
  // const [setSearch] = useContext(AppContext);
  // const history = useHistory();
  // const location = useLocation();
  // const handleSearch = (e) => {
  //   if (location.pathname !== '/posts') {
  //     history.push('/posts');
  //   }
  //   setSearch(e.target.value);
  // }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home">MTL</Navbar.Brand>
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
