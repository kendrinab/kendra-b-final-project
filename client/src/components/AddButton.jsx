import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import swal from 'sweetalert';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const AddButton = ({ post }) => {
  const { setLoading } = useContext(AppContext);

  const toggleAdd = async () => {
    setLoading(true);
    try {
      await axios({
        method: 'PUT',
        url: `/api/posts/${post._id}`,
        withCredentials: true,
        data: { completed: !post.completed }
      });
      swal('Woohoo!', 'Your post has been updated!');
      setLoading(false);
    } catch (error) {
      swal(`Uh Oh!`, 'Look Like Something Went Wrong.');
    }
  };

  return (
    <Button
      className="mr-2"
      style={{ width: 150 }}
      variant={post.completed ? 'success' : 'secondary'}
      onClick={toggleAdd}
    >
      {' '}
      {post.completed ? 'Mark Incomplete' : 'Mark Complete'}{' '}
    </Button>
  );
};
export default AddButton;
