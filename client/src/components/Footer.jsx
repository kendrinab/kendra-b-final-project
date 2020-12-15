import React from 'react';
import { Link } from 'react-router-dom';
import Twitter from '../images/twitter.svg';
import Facebook from '../images/facebook.svg';
import Instagram from '../images/instagram.svg';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="middle">
        <div className="social-media">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Facebook} alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="instagram" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twitter} alt="twitter" />
          </a>
        </div>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="#">CONTACT US</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
