import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Main pages
import Home from "../pages/Home";
import About from "../pages/About";
import FAQ from "../pages/FAQ";
import Contact from "../pages/Contact";

// Features overview
import Features from "../pages/Features";

// Individual features
import Messaging from "../features/Messaging";
import P2P from "../features/P2P";
import Security from "../features/Security";
import Monitoring from "../features/Monitoring";
import Management from "../features/Management";
import CrossPlatform from "../features/CrossPlatform";


// Layout
import PageLayout from "../components/layout/PageLayout";

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Main Pages */}
        <Route path="/" element={<PageLayout><Home /></PageLayout>} />
        <Route path="/about" element={<PageLayout><About /></PageLayout>} />
        <Route path="/faq" element={<PageLayout><FAQ /></PageLayout>} />
        <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />

        {/* Features Index */}
        <Route path="/features" element={<PageLayout><Features /></PageLayout>} />

        {/* Feature Subpages */}
        <Route path="/features/messaging" element={<PageLayout><Messaging /></PageLayout>} />
        <Route path="/features/p2p" element={<PageLayout><P2P /></PageLayout>} />
        <Route path="/features/security" element={<PageLayout><Security /></PageLayout>} />
        <Route path="/features/cross-platform" element={<PageLayout><CrossPlatform /></PageLayout>} />
        <Route path="/features/management" element={<PageLayout><Management /></PageLayout>} />
        <Route path="/features/monitoring" element={<PageLayout><Monitoring /></PageLayout>} />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
