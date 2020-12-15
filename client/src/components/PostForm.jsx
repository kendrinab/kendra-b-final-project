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
      <Form onSubmit={handlePostSubmission}>
        <Form.Group controlId="formBasicDescription">
          <Form.Label>Post Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ready to Blog? Enter A New Post!"
            name="description"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Button type="submit">Looks Good? Add Post!</Button>
        </Form.Group>
      </Form>
    </Container>
  );
};
export default PostForm;
