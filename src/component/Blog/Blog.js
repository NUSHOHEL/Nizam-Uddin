import React from 'react';
import "./Blog.css"

const Blog = () => {
    return (
        <div id="blog" class="container-fluid">
      <h1 class="text-center text-grey mt-5 mb-5 pb-5 pt-2" data-aos="slide-right" data-aos-delay="10" data-aos-once="true">B<span class="border-txt pb-3">LO</span>G</h1>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-6 col-xl-3 blog-block">
            <div class="blog-pic blog-pic-1"></div>
            <h5 class="text-grey mt-3 blog-title">Breaking Your Coder's Block</h5>
            <p class="blog-date text-grey"><small>APRIL 29, 2016</small></p>
            <hr class="blog-line"/>
            <p class="text-grey blog-desc">At one time or another, as a developer, we've all found ourselves hopelessly stuck on a coding issue...</p>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-3">
            <div class="blog-pic blog-pic-2"></div>
            <h5 class="text-grey mt-3 blog-title">!Awake: This is Your Brain on Caffeine</h5>
            <p class="blog-date text-grey"><small>MARCH 19, 2015</small></p>
            <hr class="blog-line"/>
            <p class="text-grey blog-desc">If there's one thing I can truly claim to be an expert on, it's staying awake. For five years I struggled to stay employed...</p>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-3">
            <div class="blog-pic blog-pic-3"></div>
            <h5 class="text-grey mt-3 blog-title">Getting a Handle on Handlebars</h5>
            <p class="blog-date text-grey"><small>MARCH 04, 2015</small></p>
            <hr class="blog-line"/>
            <p class="text-grey blog-desc">Here at EyeCue Lab we render most of our data-laden HTML pages in Handlebar templates...</p>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-3">
            <div class="blog-pic blog-pic-4"></div>
            <h5 class="text-grey mt-3 blog-title">5 Extensions for Your Chrome Toolbelt</h5>
            <p class="blog-date text-grey"><small>FEBRUARY 23, 2015</small></p>
            <hr class="blog-line"/>
            <p class="text-grey blog-desc">If you're not using Google Chrome as a front-end web developer, you're missing out. Not only is Chrome the...</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Blog;