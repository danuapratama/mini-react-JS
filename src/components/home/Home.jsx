import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import myhero from '../../assets/casual-life-3d-24.png';

const Home = () => {
  return (
    <div>
      <section className="home container" id="home">
        <div className="row hero">
          <div className="shape"></div>
          <div className="col col-1">
            <h1>
              Hi, <span id="greating">thank you for visiting :D</span>
            </h1>
            <span className="highlight-name">I am Danu</span>
            <h4 translate="no">Front-end Developer</h4>
            <div className="home-btn">
              <Link to="/project" className="cta">
                Portfolio
              </Link>
              <a href="#contact" className="ctn">
                Contact
              </a>
            </div>

            <a href="#contact" className="modal__button-main" id="contact">
              Contact & Socials <i className="fa fa-paper-plane-o"></i>
            </a>
          </div>

          <div className="col col-2">
            <div className="hero-img">
              <img src={myhero} alt="Front-end-Img" />
            </div>
            <div className="shape"></div>
          </div>
        </div>
      </section>
      <div class="quote" translate="no"><i class="bx bxs-quote-left bell-quote"></i><p>It's really clear that the most precious resource we all have is Time.<br /><br />-Steve Jobs-</p></div>
      <div className="modal__container" id="modal-container">
        <div className="modal__content" id="contact">
          {/* <div className="modal__close close-modal" title="Close">
            <i className="bi bi-x"></i>
          </div> */}

          <div className="line3"></div>

          <div className="contact-icons">
            <ul>
              <li>
                <a href="https://instagram.com/danuapratama" title="Instagram" target="_blank">
                  <i className="bx bxl-instagram-alt"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/danuapratama" title="GitHub" target="_blank">
                  <i className="bx bxl-github"></i>
                </a>
              </li>
              <li>
                <a href="https://saweria.co/danuapratama/" title="Support me with a coffee" target="_blank">
                  <i className="bx bxs-coffee-alt"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="modal__button mail modal__button-width" translate="no">
            <a href="mailto:danupratama.dev@gmail.com" title="Email" target="_blank">
              Email
            </a>
          </div>

          <div className="or">
            <div className="line1"></div>
            <p>Or</p>
            <div className="line2"></div>
          </div>

          <div className="modal__button tele modal__button-width" translate="no">
            <a href="https://t.me/danu_pratama" title="Telegram" target="_blank">
              Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
