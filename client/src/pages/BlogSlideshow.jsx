import React from 'react';
import { Zoom } from 'react-slideshow-image';
import image from '../images/anastasia.jpg';
import secondImage from '../images/cream.jpg';
import thirdImage from '../images/bee-natural.jpg';
import 'react-slideshow-image/dist/styles.css';

const BlogSlideshow = () => {
  const images = [image, secondImage, thirdImage];
  const zoomInProperties = {
    indicators: true,
    scale: 1.4
  };
  return (
    <div>
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className="images1" style={{ width: '800px' }}>
            <img
              style={{ objectFit: 'cover', width: '100%' }}
              src={each}
              alt="#"
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default BlogSlideshow;
