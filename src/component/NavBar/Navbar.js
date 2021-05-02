import React from 'react';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav class="navbar fixed-top navbar-expand-lg">
      <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars text-white menu-icon"></i>
      </button>
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a id="home-link" class="nav-link mr-4" href="#hero">HOME</a>
            </li>
            <li class="nav-item">
              <a id="about-link" class="nav-link mr-4" href="#about">ABOUT</a>
            </li>
            <li class="nav-item">
              <a id="port-link" class="nav-link mr-4" href="#projects">PORTFOLIO</a>
            </li>
            <li class="nav-item">
              <a id="blog-link" class="nav-link mr-4" href="#blog">BLOG</a>
            </li>
            <li class="nav-item">
              <a id="cont-link" class="nav-link mr-4" href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
};

export default Navbar;