import React, { useContext, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import Post from './Post';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import Search from './Search';
import swal from 'sweetalert';

const PostList = () => {
  const {
    setPosts,
    search,
    filteredPosts,
    setFilteredPosts,
    loading
  } = useContext(AppContext);
  useEffect(() => {
    axios
      .get('/api/posts?sortBy=dueDate:asc', { withCredentials: true })
      .then((response) => {
        setTasks(response.data);
        setFilteredTasks(response.data);
      })
      .catch((error) => {
        swal(`Oops!`, 'Something went wrong.');
      });
  }, [setPosts, setFilteredPosts, search, loading]);
  return (
    <Container>
      <Search />
      <Table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <Post posts={filteredPosts} />
        </tbody>
      </Table>
    </Container>
  );
};

export default PostList;
