import React from 'react';

const Footer = () => (
  <footer style={{ textAlign: 'center', padding: '1rem', background: '#111', color: '#fff' }}>
    © {new Date().getFullYear()} Parasyte. All rights reserved.
  </footer>
);

export default Footer;