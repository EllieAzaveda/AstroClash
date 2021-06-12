import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = ({ displaySavedFacts, displaySavedScopes }) => {
  return (
    <nav className='header'>
      <h1 className='title'>AstroClash</h1>
      <h4 className='subtitle'>Where You Don't Need to Know the Difference Between Astronomy & Astrology</h4>
      <NavLink to='/saved-astronomy-facts'><button className='display-button'>🪐</button></NavLink>
      <NavLink to='/saved-horoscopes'><button className='display-button'>🔮</button></NavLink>
    </nav>
  )
}

export default Header;
