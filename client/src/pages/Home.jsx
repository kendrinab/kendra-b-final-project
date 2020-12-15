import React from 'react';
import WaveImage from '../images/wave.png';

const Home = () => {
  return (
    <div id="homepage">
      <h1>CLN +ALT Blog</h1>
      <section>
        <div className="top-container">
          <h1>Think Cleaner!</h1>
          <h6>
            The mission here is to create a safer, and much more sustainable
            personal care industry, to provide people helpful articles on
            products they might not know is harming them.
          </h6>
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
