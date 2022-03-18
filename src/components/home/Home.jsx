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
              Hi, <span id="greating">thank you for visiting</span>
            </h1>
            <span className="highlight-name">I am Danu</span>
            <h4 translate="no">Front-end Developer</h4>
            <div className="home-btn">
              <Link to="/project" className="cta">
                Portfolio
              </Link>
              <a href="#contact-me" className="ctn">
                Contact
              </a>
            </div>

            <button className="modal__button-main" id="contact">
              Contact & Socials <i className="fa fa-paper-plane-o"></i>
            </button>

            <div className="modal__container" id="modal-container">
              <div className="modal__content">
                <div className="modal__close close-modal" title="Close">
                  <i className="bi bi-x"></i>
                </div>

                <div className="line3"></div>

                {/* <div className='my-map'><iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3966.3765291653967!2d106.9406274!3d-6.2139726!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b61dd05f57b%3A0x7601c31f974bfca7!2sKantor%20Walikota%20Administrasi%20Jakarta%20Timur!5e0!3m2!1sid!2sid!4v1646189128035!5m2!1sid!2sid"
      width="50%"
      height="50%"
      style="border: 0"
      allowfullscreen="no"
      loading="lazy"
    ></iframe></div> */}

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

                {/* <div className="credits" id="credits-contact" translate="no" style="color: var(--grey);">
      &#169;2021-<script type="text/javascript">
        var creditsyear = new Date();
        document.write(creditsyear.getFullYear());
      </script>
      Made with <span style="color: #06b3ba; font-size: 10px"><i className="bx bxs-heart"></i></span> by Danu
    </div> */}
              </div>
            </div>
          </div>

          <div className="col col-2">
            <div className="hero-img">
              <img src={myhero} alt="Front-end-Img" />
            </div>
            <div className="shape"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
