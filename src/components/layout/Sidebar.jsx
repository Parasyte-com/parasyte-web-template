import React, { useState } from 'react';
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

  return (
    <div
      className={`sidebar ${expanded ? 'expanded' : ''}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <button
        className="toggle-btn"
        onClick={() => setExpanded(prev => !prev)}
      >
        <FaBars />
      </button>

      {navItems.map(item => (
        <NavLink
          key={item.path}
          to={item.path}
          className="sidebar-link"
        >
          <div className="icon" title={item.name}>{item.icon}</div>
          {expanded && <div className="label">{item.name}</div>}
        </NavLink>
      ))}
    </div>
  );
}
