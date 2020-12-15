import React from 'react';
import WaveImage from '../images/wave.png';

const Home = () => {
  return (
    <div id="homepage">
      <h1>Welcome To CLN +ALT Blog</h1>
      <section>
        <div className="top-container">
          <img src={WaveImage} alt="" className="curved-photo" />
        </div>
      </section>
    </div>
  );
};

export default Home;
