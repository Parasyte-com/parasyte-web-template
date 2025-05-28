import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import './PageLayout.css';

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -30 },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 1.2,
};

export default function PageLayout({ children }) {
  return (
    <div className="page-wrapper">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <motion.main
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </div>
  );
}
