import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import swal from 'sweetalert';

const Signup = ({ history }) => {
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users', formData);
      sessionStorage.setItem('user', response.data);
      setCurrentUser(response.data);
      history.push('/');
    } catch (error) {
      swal('Signup Error: ', error.toString());
    }
  };
  return (
    <div className="top-signup">
      <Container className="container d-flex flex-column align-items-center justify-content-center fullscreen">
        <h1 className="mb-4">Happy Blogging!</h1>
        <Form style={{ width: 300 }} onSubmit={handleSignup}>
          <Form.Group>
            <Form.Label htmlFor="fullName">Name (First & Last)</Form.Label>
            <Form.Control
              id="fullName"
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">Email Address</Form.Label>
            <Form.Control
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="d-flex justify-content-center">
            <Button type="submit">Sign Up!</Button>
          </Form.Group>
        </Form>
        <Link className="mt-4" to="/login">
          Already have a blogging account? Login Here!
        </Link>
      </Container>
    </div>
  );
};

export default Signup;
