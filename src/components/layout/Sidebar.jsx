import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaWifi,
  FaLock,
  FaCommentDots,
  FaProjectDiagram,
  FaBars,
  FaChartBar,
  FaCogs
} from 'react-icons/fa';
import './Sidebar.css';

const navItems = [
  { name: 'Messaging', path: '/features/messaging', icon: <FaCommentDots /> },
  { name: 'Monitoring', path: '/monitoring', icon: <FaChartBar /> },
  { name: 'Management', path: '/management', icon: <FaCogs /> },
  { name: 'P2P', path: '/features/p2p', icon: <FaProjectDiagram /> },
  { name: 'Security', path: '/features/security', icon: <FaLock /> },
  { name: 'Cross-Platform', path: '/features/cross-platform', icon: <FaWifi /> },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setExpanded(prev => !prev);
  };

  return (
    <>
      <button
        className="toggle-btn"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <FaBars />
      </button>

      <div
        className={`sidebar ${expanded ? 'expanded' : ''}`}
        onMouseEnter={!isMobile ? () => setExpanded(true) : undefined}
        onMouseLeave={!isMobile ? () => setExpanded(false) : undefined}
      >
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className="sidebar-link"
            onClick={() => isMobile && setExpanded(false)} // close on mobile after click
          >
            <div className="icon" title={item.name}>{item.icon}</div>
            <div className="label">{item.name}</div>
          </NavLink>
        ))}
      </div>
    </>
  );
}
