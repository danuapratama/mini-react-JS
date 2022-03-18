import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

import mylogo from '../../assets/my_logo_primary.png';

const Navbar = () => {
  return (
    <nav>
      <nav className="navbar container" id="navbar">
        <div className="logo">
          <a href="">
            <img src={mylogo} alt="Primary Logo" />
          </a>
        </div>

        <div className="nav-list" id="">
          <ul>
            <li>
              <Link to="/" className="list active">
                <i className="fi fi-rr-home icon-regular"></i>
                <i className="fi fi-sr-home icon-solid"></i>
                <span className="nav-name" translate="no">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="list">
                <i className="fi fi-rr-user icon-regular"></i>
                <i className="fi fi-sr-user icon-solid"></i>
                <span className="nav-name" translate="no">
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link to="skills" className="list">
                <i className="fi fi-rr-chart-pie-alt icon-regular"></i>
                <i className="fi fi-sr-chart-pie-alt icon-solid"></i>
                <span className="nav-name" translate="no">
                  Skills
                </span>
              </Link>
            </li>
            <li>
              <Link to="project" className="list">
                <i className="badge-notif" data-badge="">
                  <i className="fi fi-rr-briefcase icon-regular"></i>
                  <i className="fi fi-sr-briefcase icon-solid"></i>
                </i>
                <span className="nav-name" translate="no">
                  Project
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
