import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from '../pages/Home';
import About from '../pages/About';
import Features from '../pages/Features';
import FAQ from '../pages/FAQ';
import Contact from '../pages/Contact';
import Messaging from '../pages/Messaging';
import Management from '../pages/Management';
import Monitoring from '../pages/Monitoring';

// Sub-feature pages
import CrossPlatform from '../pages/features/CrossPlatform';
import P2P from '../pages/features/P2P';
import MessagingFeature from '../pages/features/MessagingFeature';
import Security from '../pages/features/Security';

import PageLayout from '../components/layout/PageLayout';

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

        {/* Main features */}
        <Route path="/messaging" element={<PageLayout><Messaging /></PageLayout>} />
        <Route path="/monitoring" element={<PageLayout><Monitoring /></PageLayout>} />
        <Route path="/management" element={<PageLayout><Management /></PageLayout>} />

        {/* Sub-feature routes */}
        <Route path="/features/cross-platform" element={<PageLayout><CrossPlatform /></PageLayout>} />
        <Route path="/features/p2p" element={<PageLayout><P2P /></PageLayout>} />
        <Route path="/features/messaging" element={<PageLayout><MessagingFeature /></PageLayout>} />
        <Route path="/features/security" element={<PageLayout><Security /></PageLayout>} />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
