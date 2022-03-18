import React from 'react';

import './project.css';

import imgAccordion from '../../assets/business-3d-answer.png';
import imgProject1 from '../../assets/1.png';
import imgProject2 from '../../assets/2.png';
import imgProject3 from '../../assets/3.png';
import imgProject4 from '../../assets/4.png';
import imgProject5 from '../../assets/5.png';
import imgProject6 from '../../assets/6.png';
import imgProject7 from '../../assets/7.png';
import imgProject8 from '../../assets/8.png';
import imgProject9 from '../../assets/9.png';

const Project = () => {
  return (
    <div>
      <section className="portfolio container" id="portfolio">
        <div className="title">
          <h3 translate="no">- PORTFOLIO -</h3>
          <div className="ctn-title">
            <h1 translate="no">My Personal Project</h1>
            <h4 translate="no">
              Any questions? Check out the
              <span className="highlight">
                <a href="#faq"> FAQ</a>
              </span>
            </h4>
          </div>
        </div>

        <div className="portfolio-category">
          <div className="first-btn">
            <button type="button" translate="no" className="active" data-filter="all">
              All
            </button>
          </div>

          <div className="second-btn">
            <button type="button" translate="no" data-filter=".landings">
              Landings
            </button>
          </div>

          <div className="third-btn">
            <button type="button" translate="no" data-filter=".personal">
              Personal
            </button>
          </div>

          <div className="fourth-btn">
            <button type="button" translate="no" data-filter=".pages">
              Pages
            </button>
          </div>
        </div>

        <div className="portfolio-card">
          <div className="box mix landings">
            <div className="box-img">
              <img src={imgProject9} alt="" />
            </div>
            <h2 translate="no">
              e-Commerce v.2
              <a href="https://github.com/danuapratama/e-commerce-v2" target="_blank">
                <i className="fi fi-sr-folder"></i>
              </a>
            </h2>
            <h3 translate="no">User Interface</h3>

            <span className="porto-modal-btn">Details</span>

            <div className="porto-modal">
              <div className="porto-modal-content">
                <i className="bi bi-x porto-modal-close"></i>
                <h3 className="porto-modal-title">e-Commerce v.2</h3>
                <p className="porto-modal-description">UI Project</p>

                <ul className="porto-modal-list">
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Responsive layouts</p>
                  </li>
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Free for developers</p>
                  </li>
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Modern UI</p>
                  </li>
                </ul>
                <a href="https://danuapratama.github.io/e-commerce-v2" target="_blank" className="btn">
                  Live preview &raquo;
                </a>
                <a href="https://github.com/danuapratama/e-commerce-v2" target="_blank" className="btn-repo">
                  GitHub Repositories &raquo;
                </a>
              </div>
            </div>
          </div>

          <div className="box mix personal">
            <div className="box-img">
              <img src={imgProject1} alt="" />
            </div>
            <h2 translate="no">
              Photography
              <a href="https://github.com/danuapratama/photography" target="_blank">
                <i className="fi fi-sr-folder"></i>
              </a>
            </h2>
            <h3 translate="no">User Interface</h3>

            <span className="porto-modal-btn">Details</span>

            <div className="porto-modal">
              <div className="porto-modal-content">
                <i className="bi bi-x porto-modal-close"></i>
                <h3 className="porto-modal-title">Photography</h3>
                <p className="porto-modal-description">UI Project</p>

                <ul className="porto-modal-list">
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Responsive layouts</p>
                  </li>
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Free for developers</p>
                  </li>
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Modern UI</p>
                  </li>
                </ul>
                <a href="https://danuapratama.github.io/photography" target="_blank" className="btn">
                  Live preview &raquo;
                </a>
                <a href="https://github.com/danuapratama/photography" target="_blank" className="btn-repo">
                  GitHub Repositories &raquo;
                </a>
              </div>
            </div>
          </div>

          <div className="box mix personal">
            <div className="box-img">
              <img src={imgProject2} alt="" />
            </div>
            <h2 translate="no">
              Blog Page
              <a href="https://github.com/danuapratama/simple-blog" target="_blank">
                <i className="fi fi-sr-folder"></i>
              </a>
            </h2>
            <h3 translate="no">User Interface</h3>

            <span className="porto-modal-btn">Details</span>

            <div className="porto-modal">
              <div className="porto-modal-content">
                <i className="bi bi-x porto-modal-close"></i>
                <h3 className="porto-modal-title">Simple Blog Page</h3>
                <p className="porto-modal-description">UI Project</p>

                <ul className="porto-modal-list">
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Responsive layouts</p>
                  </li>
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Free for developers</p>
                  </li>
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Modern UI</p>
                  </li>
                </ul>
                <a href="https://danuapratama.github.io/simple-blog" target="_blank" className="btn">
                  Live preview &raquo;
                </a>
                <a href="https://github.com/danuapratama/simple-blog" target="_blank" className="btn-repo">
                  GitHub Repositories &raquo;
                </a>
              </div>
            </div>
          </div>

          <div className="box mix landings">
            <div className="box-img">
              <img src={imgProject3} alt="" />
            </div>
            <h2 translate="no">
              e-Commerce v.1
              <a href="https://github.com/danuapratama/furniture-web" target="_blank">
                <i className="fi fi-sr-folder"></i>
              </a>
            </h2>
            <h3 translate="no">User Interface</h3>

            <span className="porto-modal-btn">Details</span>

            <div className="porto-modal">
              <div className="porto-modal-content">
                <i className="bi bi-x porto-modal-close"></i>
                <h3 className="porto-modal-title">e-Commerce v.1</h3>
                <p className="porto-modal-description">UI Project</p>

                <ul className="porto-modal-list">
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Responsive layouts</p>
                  </li>
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Free for developers</p>
                  </li>
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Modern UI</p>
                  </li>
                </ul>
                <a href="https://danuapratama.github.io/furniture-web" target="_blank" className="btn">
                  Live preview &raquo;
                </a>
                <a href="https://github.com/danuapratama/furniture-web" target="_blank" className="btn-repo">
                  GitHub Repositories &raquo;
                </a>
              </div>
            </div>
          </div>

          <div className="box mix landings">
            <div className="box-img">
              <img src={imgProject4} alt="" />
            </div>
            <h2 translate="no">
              Travel
              <a href="https://github.com/danuapratama/website-travel" target="_blank">
                <i className="fi fi-sr-folder"></i>
              </a>
            </h2>
            <h3 translate="no">User Interface</h3>

            <span className="porto-modal-btn">Details</span>

            <div className="porto-modal">
              <div className="porto-modal-content">
                <i className="bi bi-x porto-modal-close"></i>
                <h3 className="porto-modal-title">Travel Website</h3>
                <p className="porto-modal-description">UI Project</p>

                <ul className="porto-modal-list">
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Responsive layouts</p>
                  </li>
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Dark/light mode</p>
                  </li>
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Free for developers</p>
                  </li>
                </ul>
                <a href="https://danuapratama.github.io/website-travel" target="_blank" className="btn">
                  Live preview &raquo;
                </a>
                <a href="https://github.com/danuapratama/website-travel" target="_blank" className="btn-repo">
                  GitHub Repositories &raquo;
                </a>
              </div>
            </div>
          </div>

          <div className="box mix personal">
            <div className="box-img">
              <img src={imgProject5} alt="" />
            </div>
            <h2 translate="no">
              To-Do List
              <a href="https://github.com/danuapratama/to-do-list" target="_blank">
                <i className="fi fi-sr-folder"></i>
              </a>
            </h2>
            <h3 translate="no">JavaScript</h3>

            <span className="porto-modal-btn">Details</span>

            <div className="porto-modal">
              <div className="porto-modal-content">
                <i className="bi bi-x porto-modal-close"></i>
                <h3 className="porto-modal-title">To-do List App</h3>
                <p className="porto-modal-description">Javascript Simple Project</p>

                <ul className="porto-modal-list">
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Responsive layouts</p>
                  </li>
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Free for developers</p>
                  </li>
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Modern UI</p>
                  </li>
                </ul>
                <a href="https://danuapratama.github.io/to-do-list" target="_blank" className="btn">
                  Live preview &raquo;
                </a>
                <a href="https://github.com/danuapratama/to-do-list" target="_blank" className="btn-repo">
                  GitHub Repositories &raquo;
                </a>
              </div>
            </div>
          </div>

          <div className="box mix landings">
            <div className="box-img">
              <img src={imgProject6} alt="" />
            </div>
            <h2 translate="no">
              Landing Page
              <a href="https://github.com/danuapratama/landing-page" target="_blank">
                <i className="fi fi-sr-folder"></i>
              </a>
            </h2>
            <h3 translate="no">User Interface</h3>

            <span className="porto-modal-btn">Details</span>

            <div className="porto-modal">
              <div className="porto-modal-content">
                <i className="bi bi-x porto-modal-close"></i>
                <h3 className="porto-modal-title">Landing Page</h3>
                <p className="porto-modal-description">UI Project</p>

                <ul className="porto-modal-list">
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Responsive layouts</p>
                  </li>
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Dark/light mode</p>
                  </li>
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Free for developers</p>
                  </li>
                </ul>
                <a href="https://danuapratama.github.io/landing-page" target="_blank" className="btn">
                  Live preview &raquo;
                </a>
                <a href="https://github.com/danuapratama/landing-page" target="_blank" className="btn-repo">
                  GitHub Repositories &raquo;
                </a>
              </div>
            </div>
          </div>

          <div className="box mix pages">
            <div className="box-img">
              <img src={imgProject7} alt="" />
            </div>
            <h2 translate="no">
              Login Form
              <a href="https://github.com/danuapratama/login-form" target="_blank">
                <i className="fi fi-sr-folder"></i>
              </a>
            </h2>
            <h3 translate="no">User Interface</h3>

            <span className="porto-modal-btn">Details</span>

            <div className="porto-modal">
              <div className="porto-modal-content">
                <i className="bi bi-x porto-modal-close"></i>
                <h3 className="porto-modal-title">Login Form v.1</h3>
                <p className="porto-modal-description">UI Project</p>

                <ul className="porto-modal-list">
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Responsive layouts</p>
                  </li>
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Free for developers</p>
                  </li>
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Modern UI</p>
                  </li>
                </ul>
                <a href="https://danuapratama.github.io/login-form" target="_blank" className="btn">
                  Live preview &raquo;
                </a>
                <a href="https://github.com/danuapratama/login-form" target="_blank" className="btn-repo">
                  GitHub Repositories &raquo;
                </a>
              </div>
            </div>
          </div>

          <div className="box mix personal">
            <div className="box-img">
              <img src={imgProject8} alt="" />
            </div>
            <h2 translate="no">
              Neumorphism
              <a href="https://github.com/danuapratama/neumorphism-web" target="_blank">
                <i className="fi fi-sr-folder"></i>
              </a>
            </h2>
            <h3 translate="no">User Interface</h3>

            <span className="porto-modal-btn">Details</span>

            <div className="porto-modal">
              <div className="porto-modal-content">
                <i className="bi bi-x porto-modal-close"></i>
                <h3 className="porto-modal-title">Neumorphism Design</h3>
                <p className="porto-modal-description">UI Project</p>

                <ul className="porto-modal-list">
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Responsive layouts</p>
                  </li>
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Dark/light mode</p>
                  </li>
                  <li className="porto-modal-item">
                    <i className="bi bi-patch-check-fill porto-modal-icon"></i>
                    <p className="porto-modal-info">Free for developers</p>
                  </li>
                </ul>
                <a href="https://danuapratama.github.io/neumorphism-web" target="_blank" className="btn">
                  Live preview &raquo;
                </a>
                <a href="https://github.com/danuapratama/neumorphism-web" target="_blank" className="btn-repo">
                  GitHub Repositories &raquo;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ACCORDION FAQ --> */}
      <section className="accordion-container container" id="faq">
        <div className="accordion">
          <div className="image-box">
            <img src={imgAccordion} alt="" />
          </div>
          <div className="accordion-text">
            <ul className="faq-text">
              <li>
                <div className="question-arrow">
                  <span className="question">How long is my experience in programming?</span>
                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <p>I started learning programming since 2021</p>
                <span className="line"></span>
              </li>
              <li>
                <div className="question-arrow">
                  <span className="question">Is my project open source?</span>
                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <p>Yes, all my projects are open source</p>
                <span className="line"></span>
              </li>
              <li>
                <div className="question-arrow">
                  <span className="question">Who are these projects for?</span>
                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <p>This project is for all web developers in the world</p>
                <span className="line"></span>
              </li>
              <li>
                <div className="question-arrow">
                  <span className="question">Is this source code for sale?</span>
                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <p>It's free. However if you want to provide support, please send your support via the support link provided</p>
                <span className="line"></span>
              </li>
              <li>
                <div className="question-arrow">
                  <span className="question">How to reach me?</span>
                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <p>You can contact me via email and Telegram, or follow my socials media. Let's connect 🚀</p>
                <span className="line"></span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
