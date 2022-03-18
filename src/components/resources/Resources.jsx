import React from 'react';
import { Link } from 'react-router-dom';
import './resources.css';

const Resources = () => {
  return (
    <div>
      <div className="back">
        <Link to="/skills" className="button-back">
          <i className="fa fa-arrow-left"></i>Resources
        </Link>
      </div>
      <section className="sponsor section">
        <div className="sponsor__container container grid">
          <div className="sponsor__content">
            <h2 translate="no">
              Git
              <a href="https://git-scm.com/" target="_blank">
                <i className="fa fa-chevron-right"></i>
              </a>
            </h2>
            <h3 translate="no">Version Control System</h3>
          </div>
          <div className="sponsor__content">
            <h2 translate="no">
              GitHub
              <a href="https://github.com" target="_blank">
                <i className="fa fa-chevron-right"></i>
              </a>
            </h2>
            <h3 translate="no">Hosting & Software Development</h3>
          </div>
          <div className="sponsor__content">
            <h2 translate="no">
              Visual Studio Code
              <a href="https://code.visualstudio.com" target="_blank">
                <i className="fa fa-chevron-right"></i>
              </a>
            </h2>
            <h3 translate="no">Code Editor</h3>
          </div>
          <div className="sponsor__content">
            <h2 translate="no">
              React JS
              <a href="https://reactjs.org/" target="_blank">
                <i className="fa fa-chevron-right"></i>
              </a>
            </h2>
            <h3 translate="no">Javascript UI Library</h3>
          </div>
          <div className="sponsor__content">
            <h2 translate="no">
              Bootstrap
              <a href="https://getbootstrap.com" target="_blank">
                <i className="fa fa-chevron-right"></i>
              </a>
            </h2>
            <h3 translate="no">CSS Framework</h3>
          </div>
          <div className="sponsor__content">
            <h2 translate="no">
              Jquery
              <a href="https://jquery.com" target="_blank">
                <i className="fa fa-chevron-right"></i>
              </a>
            </h2>
            <h3 translate="no">Javascript Library</h3>
          </div>
          <div className="sponsor__content">
            <h2 translate="no">
              AOS
              <a href="https://michalsnik.github.io/aos" target="_blank">
                <i className="fa fa-chevron-right"></i>
              </a>
            </h2>
            <h3 translate="no">Animate On Scroll Library</h3>
          </div>
          <div className="sponsor__content">
            <h2 translate="no">
              MixItUp
              <a href="https://www.kunkalabs.com/mixitup/" target="_blank">
                <i className="fa fa-chevron-right"></i>
              </a>
            </h2>
            <h3 translate="no">Animated Filtering & Sorting Library</h3>
          </div>
          <div className="sponsor__content">
            <h2 translate="no">
              Tilt JS
              <a href="https://micku7zu.github.io/vanilla-tilt.js" target="_blank">
                <i className="fa fa-chevron-right"></i>
              </a>
            </h2>
            <h3 translate="no">Frame Animation</h3>
          </div>
          <div className="sponsor__content">
            <h2 translate="no">
              Swiper JS
              <a href="https://swiperjs.com" target="_blank">
                <i className="fa fa-chevron-right"></i>
              </a>
            </h2>
            <h3 translate="no">Mobile Touch Slider</h3>
          </div>
          <div className="sponsor__content">
            <h2 translate="no">
              Getwaves
              <a href="https://getwaves.io" target="_blank">
                <i className="fa fa-chevron-right"></i>
              </a>
            </h2>
            <h3 translate="no">SVG Wave Generator</h3>
          </div>
          <div className="sponsor__content">
            <h2 translate="no">
              Freepik
              <a href="https://freepik.com" target="_blank">
                <i className="fa fa-chevron-right"></i>
              </a>
            </h2>
            <h3 translate="no">Free Graphic Resources</h3>
          </div>
          <div className="sponsor__content">
            <h2 translate="no">
              Icons 8
              <a href="https://icons8.com" target="_blank">
                <i className="fa fa-chevron-right"></i>
              </a>
            </h2>
            <h3 translate="no">Icons & Illustrations Resources</h3>
          </div>
          <div className="sponsor__content">
            <h2 translate="no">
              Flaticon
              <a href="https://flaticon.com" target="_blank">
                <i className="fa fa-chevron-right"></i>
              </a>
            </h2>
            <h3 translate="no">Icons Resources</h3>
          </div>
          <div className="sponsor__content">
            <h2 translate="no">
              Font Awesome
              <a href="https://fontawesome.com" target="_blank">
                <i className="fa fa-chevron-right"></i>
              </a>
            </h2>
            <h3 translate="no">Icons Resources</h3>
          </div>
          <div className="sponsor__content">
            <h2 translate="no">
              Boxicons
              <a href="https://boxicons.com" target="_blank">
                <i className="fa fa-chevron-right"></i>
              </a>
            </h2>
            <h3 translate="no">Icons Resources</h3>
          </div>
          <div className="sponsor__content">
            <h2 translate="no">
              Google Fonts
              <a href="https://fonts.google.com" target="_blank">
                <i className="fa fa-chevron-right"></i>
              </a>
            </h2>
            <h3 translate="no">Fonts Library</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
