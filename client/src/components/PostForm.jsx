import React, { useState, useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
const PostForm = () => {
  const [postData, setPostData] = useState(null);
  const { setLoading } = useContext(AppContext);
  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  const handlePostSubmission = async (e) => {
    const form = e.target;
    setLoading(true);
    e.preventDefault();
    try {
      await axios({
        method: 'POST',
        url: '/api/posts',
        withCredentials: true,
        data: postData
      });
      setPostData(null);
      setLoading(false);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Form onSubmit={handleTaskSubmission}>
        <Form.Group controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter A New Post"
            name="description"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicDueDate">
          <Form.Label>Due Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter A New Post"
            name="dueDate"
            onChange={handleChange}
            className="col-md-4"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Button type="submit">Add Post</Button>
        </Form.Group>
      </Form>
    </Container>
  );
};
export default PostForm;
