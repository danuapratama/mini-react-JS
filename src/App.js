import React from 'react';
// import { Homes, Abouts, Skillss, Projects, Footers } from './containers';
import { Home, About, Skills, Project, Resources, Navbar } from './components';
import { Routes, Route } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </div>
  );
};

export default App;