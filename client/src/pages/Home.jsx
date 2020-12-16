import React from 'react';
import WaveImage from '../images/wave.png';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import addpost from '../images/addpost.png';
import addblog from '../images/blog.png';

const Home = () => {
  return (
    <div id="homepage">
      <section>
        <div className="top-container">
          <h1 className="think-clean-header">Think Clean!</h1>
          <p className="top-home-h6">
            Our Mission is to create a safer, and much more sustainable personal
            care industry, to provide people helpful articles on products they
            might not know is harming them.
          </p>
          <p className="cln-alt-team">- The CLN +ALT Team</p>
          <Form className="signup-button" style={{ width: 500, height: 400 }}>
            <Form.Group className="d-flex justify-content-center">
              <Link to="/Signup">
                <Button type="submit">Sign Up!</Button>
              </Link>
            </Form.Group>
          </Form>
          <img src={WaveImage} alt="" className="curved-photo" />
        </div>
      </section>
      <section>
        <div className="home-info">
          <section>
            <h2 className="cln-alt-title"> How CLN +ALT Blog Works</h2>
            <div>
              <img src={addpost} className="add-post-img" />
            </div>
            <p className="p1">
              Once you've signed up, You can automatically add a post of your
              experiences with products.
            </p>
            <div>
              <img src={addblog} className="add-blog-img" />
            </div>
            <p className="p1">
              See your posts on what you'd like to share with others about CLNer
              +ALTernatives in the Blog Post.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Home;
