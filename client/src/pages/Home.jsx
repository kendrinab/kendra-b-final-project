import React from 'react';
import WaveImage from '../images/wave.png';

const Home = () => {
  return (
    <div id="homepage">
      <h1>Welcome to CLN +ALT Blog</h1>
      <section>
        <div className="top-container">
          <h1>Think Clean!</h1>
          <img src={WaveImage} alt="" className="curved-photo" />
        </div>
      </section>
      <section>
        <div className="home-info">
          <section>
            <p className="p1">
              Hi! Welcome to the CLN +ALT Blog. The place to find nothing but
              informative & creative posts on Bodycare, Skincare, Haircare, and
              so much more!
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Home;
