import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Dropdown from '../components/Dropdown';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
const Logout = () => {
  const { setCurrentUser } = useContext(AppContext);
  const history = useHistory();
  const handleSignOut = async () => {
    try {
      await axios({
        method: 'POST',
        url: '/api/users/logout',
        withCredentials: true
      });
      sessionStorage.removeItem('user');
      setCurrentUser(null);
      history.push('/login');
    } catch (error) {
      console.log(error);
    }
  };
  return <Dropdown.Item onClick={handleSignOut}>Logout</Dropdown.Item>;
};
