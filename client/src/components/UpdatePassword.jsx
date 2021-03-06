import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';

const UpdatePassword = ({ history }) => {
  const [password, setPassword] = useState(null);
  const handleChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.password !== password.confirmPassword) {
      swal('Error', 'Uh Oh! Remember your passwords must match!');
      return;
    }
    await axios.put(
      '/api/users/password',
      { password: password.password },
      { withCredentials: true }
    );
    swal('Updated!', 'Woohoo! Your password has been updated!');
    history.push('/login');
  };
  return (
    <div className="updatep-container">
      <Container className="container d-flex flex-column align-items-center justify-content-center fullscreen">
        <h1 className="mb-4">Update Password</h1>
        <Form style={{ width: 300 }} onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter new password"
              onChange={handleChange}
              name="password"
              autoComplete="off"
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter a new password"
              onChange={handleChange}
              name="confirmPassword"
              required
              autoComplete="off"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Update Your Password
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};
export default UpdatePassword;
