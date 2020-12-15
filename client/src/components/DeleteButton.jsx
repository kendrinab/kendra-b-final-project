import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import swal from 'sweetalert';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const DeleteButton = ({ id }) => {
  const { setLoading } = useContext(AppContext);
  const handleDelete = async () => {
    setLoading(true);
    try {
      const willDelete = await swal({
        title: 'Are you 100% sure?',
        text:
          'Once this post gets deleted, you will not be able to recover it!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      });
      if (willDelete) {
        try {
          await axios({
            method: 'DELETE',
            url: `/api/posts/${id}`,
            withCredentials: true
          });
          swal('Poof Post! Your post has been deleted!', { icon: 'success' });
          setLoading(false);
        } catch (error) {
          swal(`Uh Oh!`, 'Looks Like Something Went Wrong.');
        }
      } else {
        swal('Your post is in our safe spot!');
      }
    } catch (error) {
      swal(`Uh Oh!`, 'Looks Like Something Went Wrong.');
    }
  };
  return (
    <Button onClick={handleDelete} variant="danger">
      Buh Bye!
    </Button>
  );
};
export default DeleteButton;
