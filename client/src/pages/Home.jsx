import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome To CLN +ALT Blog</h1>
      <section>
        <div className="top-container">
          <img src={require('../images/wave.png')} className="curved-photo" />
        </div>
      </section>
    </div>
  );
};

export default Home;
