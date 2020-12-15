import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { Container, Form, Button } from 'react-bootstrap';
import swal from 'sweetalert';

const Login = ({ history }) => {
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
    console.log(event);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/login', formData);
      setCurrentUser(response.data);
      sessionStorage.setItem('user', response.data);
      history.push('/');
    } catch (error) {
      swal(`Oh no!`, 'Looks Like Something Went Wrong');
    }
  };
  return (
    <Container className="container d-flex flex-column align-items-center justify-content-center fullscreen">
      <div className="login-container">
        <h1 className="mb-4">Welcome Back, CLN +Blogger!</h1>
        <Form style={{ width: 300 }} onSubmit={handleLogin}>
          <Form.Group>
            <Form.Label htmlFor="email">Email Address</Form.Label>
            <Form.Control
              id="email"
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={handleChange}
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
            />
          </Form.Group>
          <Form.Group className="d-flex justify-content-center">
            <Button type="submit">Login</Button>
          </Form.Group>
        </Form>
        <Link className="mt-4" to="/signup">
          Ready to Blog? Sign Up Now!
        </Link>
      </div>
    </Container>
  );
};

export default Login;
