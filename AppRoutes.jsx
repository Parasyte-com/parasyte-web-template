
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Messaging from './pages/features/Messaging';
import P2P from './pages/features/P2P';
import CrossPlatform from './pages/features/CrossPlatform';
import Security from './pages/features/Security';
import Monitoring from './pages/Monitoring';
import Management from './pages/Management';
import MessagingPage from './pages/Messaging';
import Contact from './pages/Contact';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/features/messaging" element={<Messaging />} />
        <Route path="/features/p2p" element={<P2P />} />
        <Route path="/features/cross-platform" element={<CrossPlatform />} />
        <Route path="/features/security" element={<Security />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="/management" element={<Management />} />
        <Route path="/messaging" element={<MessagingPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
