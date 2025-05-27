import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import About from '../pages/About';
import Features from '../pages/Features';
import FAQ from '../pages/FAQ';
import Contact from '../pages/Contact';
import PageLayout from '../components/layout/PageLayout'; // or wherever you placed it

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageLayout><Home /></PageLayout>} />
        <Route path="/about" element={<PageLayout><About /></PageLayout>} />
        <Route path="/features" element={<PageLayout><Features /></PageLayout>} />
        <Route path="/faq" element={<PageLayout><FAQ /></PageLayout>} />
        <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
