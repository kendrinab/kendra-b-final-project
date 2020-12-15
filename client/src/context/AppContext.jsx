import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState('null');
  const [posts, setPosts] = useState([]);
  // const [currentFilter, setCurrentFilter] = useState([]);
  // const [filteredPosts, setFilteredPosts] = useState([]);
  // const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState('false');

  const user = sessionStorage.getItem('user');
  useEffect(() => {
    if (user && !currentUser) {
      axios
        .get(`api/users/me`, { withCredentials: true })
        .then(({ data }) => {
          setCurrentUser(data);
          console.log(currentUser);
        })
        .catch((error) => console.log(error));
    }
  }, [currentUser, user]);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        loading,
        setLoading,
        posts,
        setPosts
        // currentFilter,
        // setCurrentFilter,
        // filteredPosts,
        // setFilteredPosts,
        // search,
        // setSearch
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
