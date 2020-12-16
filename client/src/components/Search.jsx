import React, { useContext } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

const Search = () => {
  const { setSearch } = useContext(AppContext);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="search-bar">
      <Form inline>
        <FormControl
          onChange={handleSearch}
          type="text"
          placeholder="Search for a post!"
          className="mr-sm-2"
        />
        <Button variant="outline-info">Search</Button>
      </Form>
    </div>
  );
};

export default Search;
