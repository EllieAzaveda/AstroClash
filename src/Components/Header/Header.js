import React from 'react';
import './Header.css';

const Header = ({ displaySavedFacts, displaySavedScopes }) => {
  return (
    <nav className='header'>
      <h1 className='header-title'>AstroClash</h1>
      <h4 className='subtitle'>WHERE YOU DON'T NEED TO KNOW THE DIFFERENCE BETWEEN ASTRONOMY & ASTROLOGY</h4>
    </nav>
  )
}

export default Header;
