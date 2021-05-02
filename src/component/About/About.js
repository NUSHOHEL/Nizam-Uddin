/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */

import React from 'react';
import "./About.css"
import profic from "../../76475.jpg"
import fast from "../../images/about-1.PNG"
import responsive from "../../images/about-2.PNG"
import intuative from "../../images/about-3.PNG"
import Daynamic from "../../images/about-4.PNG"

const About = () => {
    return (
        <div id="about" class="container-fluid">
        <h1 class="text-center text-grey mt-5 mb-5 pb-5 pt-5" data-aos="slide-right" data-aos-delay="10" data-aos-once="true">A<span class="border-txt pb-3">BOU</span>T</h1>
        <div class="container">
          <div class="row mb-5">
            <div class="col-sm-6 col-md-6 col-lg-3 text-center">
              <img src={fast} class="img-fluid about-img" data-aos="flip-right" data-aos-delay="100" data-aos-once="true" alt=""/>
              <h4 class="text-grey text-center mt-3">Fast</h4>
              <p class="text-grey">Fast load times and lag free interaction, my highest priority.</p>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3 text-center">
              <img src={responsive} class="img-fluid about-img" data-aos="flip-right" data-aos-delay="150" data-aos-once="true" alt=""/>
              <h4 class="text-grey text-center mt-3">Responsive</h4>
              <p class="text-grey">My layouts will work on any device, big or xsall.</p>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3 text-center">
              <img src={intuative} class="img-fluid about-img" data-aos="flip-right" data-aos-delay="200" data-aos-once="true" alt=""/>
              <h4 class="text-grey text-center mt-3">Intuitive</h4>
              <p class="text-grey">Strong preference for easy to use, intuitive UX/UI.</p>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3 text-center">
              <img src={Daynamic} class="img-fluid about-img" data-aos="flip-right" data-aos-delay="250" data-aos-once="true" alt=""/>
              <h4 class="text-grey text-center mt-3">Dynamic</h4>
              <p class="text-grey">Websites don't have to be static, I love making pages come to life.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-12 text-center" data-aos="slide-right" data-aos-delay="10" data-aos-once="true">
              <img src={profic} id="profile-pic" class="img-fluid" alt=""/>
              <h4 class="text-grey text-center mt-4 mb-3">Who's this guy?</h4>
              <p class="text-grey about-para">I'm a Front-End Developer for <a href="http://www.chownow.com/" class="custom-link" target="_blank">ChowNow</a> in Los Angeles, CA.<br/>
                I have serious passion for UI effects, animations and creating<br/> intuitive, dynamic user experiences.<br/>
                <a href="" class="custom-link" target="_blank">Let's make something special.</a></p>
            </div>
            <div class="col-lg-6 col-md-12" data-aos="slide-left" data-aos-delay="10" data-aos-once="true">
              <div class="progress">
                <div class="progress-bar progress-skill text-center text-white" role="progressbar" style={{width:"20%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">CSS</div>
                <div class="progress-bar progress-fill ninetyFill" role="progressbar" style={{width:"70%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <span class="text-dark progress-value">90%</span>
              </div>
              <div class="progress">
                <div class="progress-bar progress-skill text-center text-white" role="progressbar" style={{width:"20%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">HTML</div>
                <div class="progress-bar progress-fill ninetyFill" role="progressbar" style={{width:"70%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <span class="text-dark progress-value">90%</span>
              </div>
              <div class="progress">
                <div class="progress-bar progress-skill text-center text-white" role="progressbar" style={{width:"20%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">React</div>
                <div class="progress-bar progress-fill eightyFill" role="progressbar" style={{width:"70%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <span class="text-dark progress-value">80%</span>
              </div>
              <div class="progress">
                <div class="progress-bar progress-skill text-center text-white" role="progressbar" 
                style={{width:"20%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">JavaScript</div>
                <div class="progress-bar progress-fill eightyFill" role="progressbar" style={{width:"70%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <span class="text-dark progress-value">80%</span>
              </div>
              <div class="progress">
                <div class="progress-bar progress-skill text-center text-white" role="progressbar" style={{width:"20%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Angular</div>
                <div class="progress-bar progress-fill fiftyFill" role="progressbar" style={{width:"70%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <span class="text-dark progress-value">50%</span>
              </div>
              <div class="progress">
                <div class="progress-bar progress-skill text-center text-white" role="progressbar" style={{width:"20%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Node.js</div>
                <div class="progress-bar progress-fill sixfiveFill" role="progressbar" style={{width:"70%"}}aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <span class="text-dark progress-value">65%</span>
              </div>
              <div class="progress">
                <div class="progress-bar progress-skill text-center text-white" role="progressbar" style={{width:"20%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Ruby/Rails</div>
                <div class="progress-bar progress-fill sixfiveFill" role="progressbar" style={{width:"70%"}}aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <span class="text-dark progress-value">65%</span>
              </div>
              <div class="progress">
                <div class="progress-bar progress-skill text-center text-white" role="progressbar" style={{width:"20%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">UI Design</div>
                <div class="progress-bar progress-fill fiftyFill" role="progressbar" style={{width:"70%"}}aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <span class="text-dark progress-value">50%</span>
              </div>
              <div class="progress">
                <div class="progress-bar progress-skill text-center text-white" role="progressbar" style={{width:"20%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Photoshop</div>
                <div class="progress-bar progress-fill sixtyFill" role="progressbar" style={{width:"70%"}}aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <span class="text-dark progress-value">60%</span>
              </div>
              <div class="progress">
                <div class="progress-bar progress-skill text-center text-white" role="progressbar" style={{width:"20%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Sketch</div>
                <div class="progress-bar progress-fill fiftyFill" role="progressbar" style={{width:"70%"}}aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <span class="text-dark progress-value">50%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;