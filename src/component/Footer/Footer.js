import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div id="footer" class="container-fluid text-center text-white">
        <a href="#hero"><i class="fas fa-angle-double-up up-icon text-white"></i></a>
        <div class="icon-container pt-5">
          <FontAwesomeIcon className="p-2" size="3x" icon={faFacebook}/>
          <FontAwesomeIcon className="p-2" size="3x" icon={faFacebook}/>
          <FontAwesomeIcon className="p-2" size="3x" icon={faFacebook}/>
          <FontAwesomeIcon className="p-2" size="3x" icon={faFacebook}/>
          <FontAwesomeIcon className="p-2" size="3x" icon={faFacebook}/>
       
        </div>
        <p class="footer-txt mt-5 pb-5">Nizam Uddin <span class="hero-name">&copy; 2021</span></p>
      </div>
    );
};

export default Footer;