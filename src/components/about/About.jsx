import React from 'react';
import myfoto from '../../assets/danu.jpg';
import './about.css';

const About = () => {
  return (
    <div>
      <section className="about container" id="about">
        <div className="content"/>
          <div className="about-details">
            <div className="left">
              <img src={myfoto} alt=""/>
            </div>
            <div className="right">
              <div className="topic">Who Am I?</div>
              <p className="text">
                I believe that Portfolio should not be about me, but about the things I do with the expertise I have, so you can see my work. In the end, only that matters. But if you really would like to know me more here it is<span className="dots">...</span>
                <span className="more-text"><br/><br/>My name is Danu A. Pratama. I am an active student from a university with an informatics engineering study program based in Jakarta, Indonesia. I am interested in programming, especially when it comes to web development. This website is a portfolio that I have been working on starting in 2021 and will continue to improve as I increase my knowledge and skills in the field of front-end web development. I am looking to collaborate on amazing projects in the future and be part of an incredible team.<br/><br/>Best,<br/>Danu<br/></span> 
              </p>
              <div className="button"/>
                <a href="#" className="button">Resume</a>
              </div>
            <div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
