import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const UpdatePost = ({ currentPost }) => {
  const history = useHistory();
  const [formData, setFormData] = useState(currentPost);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    const form = e.target;
    e.preventDefault();
    try {
      await axios.put(`/api/posts/:id`, formData, {
        withCredentials: true
      });
      setFormData({});
      form.reset();
      history.push(`/posts/${currentPost._id}`);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(formData);
  return (
    <>
      <p className="updatePost">Change Post's Title & Description Below</p>
      <form onSubmit={handleUpdate}>
        <label>Change Title</label>
        <input
          type="text"
          name="title"
          placeholder={formData?.title}
          onChange={handleChange}
        />
        <label>Change Your Post Description</label>
        <textarea
          name="description"
          placeholder={formData?.description}
          onChange={handleChange}
          rows="8"
        />
        <button className="button bgBlack" type="submit">
          Update Your Post
        </button>
      </form>
    </>
  );
};

export default UpdatePost;
