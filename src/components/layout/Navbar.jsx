import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/parasyte-head.png';
import './Footer';

const Navbar = () => (
  <nav className='navbar'>
    <div className='navbar__logo'>
      <img src={logo} alt='Parasyte' />
      {/* <span className="gradient-text">PArAsYtE</span> */}
    </div>

    <div className="center-text">
  <span className="gradient-text">PArAsYtE</span>
</div>


    <ul className='navbar__links'>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/features'>Features</Link></li>
      <li><Link to='/faq'>FAQ</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;