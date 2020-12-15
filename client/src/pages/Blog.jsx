import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BlogSlideshow from '../pages/BlogSlideshow';

const Blog = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/posts`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, setPosts]);

  return (
    <div className="blog-title">
      <div>
        <section>
          <BlogSlideshow />
        </section>
      </div>
      <section className="the-latest">
        <h1>News Flash</h1>
      </section>
      <div class="parent">
        <div>
          {posts.map((post) => (
            <li key={post._id}>
              <span>
                <h4 className="post-title">{post.title}</h4>
              </span>
              <img src={post.image} alt={post.title} />
              {post.text}
            </li>
          ))}
        </div>
        <div>
          {posts
            .map((post) => (
              <li key={post._id}>
                <h4 className="post-title">{post.title}</h4>
                <img src={post.image} alt={post.title} />
                {post.text}
              </li>
            ))
            .reverse()}
        </div>
      </div>
    </div>
  );
};

export default Blog;
