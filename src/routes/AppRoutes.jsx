import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Features from '../pages/Features';
import FAQ from '../pages/FAQ';
import Contact from '../pages/Contact';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/features' element={<Features />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;