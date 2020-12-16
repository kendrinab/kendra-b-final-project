import React from 'react';
import WaveImage from '../images/wave.png';

const Home = () => {
  return (
    <div id="homepage">
      {/* <h4>CLN +ALT Blog</h4> */}
      <section>
        <div className="top-container">
          <h1>Think Clean!</h1>
          <h5 className="top-home-h6">
            Our Mission is to create a safer, and much more sustainable personal
            care industry, to provide people helpful articles on products they
            might not know is harming them.
          </h5>
          <img src={WaveImage} alt="" className="curved-photo" />
        </div>
      </section>
      <section>
        <div className="home-info">
          <section>
            <h5 className="p1">
              CLN +ALT Blog, The place to find nothing but informative &
              creative posts on Bodycare, Skincare, Haircare, and so much more!
            </h5>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Home;
