import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <div id="contact" class="container-fluid">
        <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
          <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
        </svg>
        <h1 class="text-center text-white mt-5 mb-5 pb-3 pt-3" data-aos="slide-left" data-aos-delay="10" data-aos-once="true">C<span class="border-wht pb-3">ONTAC</span>T</h1>
        <p class="text-center mb-5" data-aos="slide-right" data-aos-delay="100" data-aos-once="true">Have a question or want to work together?</p>
        <div class="col-md-6 offset-md-3 pl-5 pr-5">
          <form class="pl-4 pr-4 pb-5" data-aos="slide-up" data-aos-delay="10" data-aos-once="true">
            <div class="form-group">
              <input type="text" class="form-control" id="name" placeholder="Name"/>
            </div>
            <div class="form-group">
              <input type="email" class="form-control" id="email" placeholder="Email"/>
            </div>
            <div class="form-group">
              <textarea class="form-control" id="msg" placeholder="Your Message" rows="5"></textarea>
            </div>
            <div class="form-group float-right">
              <button class="contact-btn mt-2">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Contact;