import React from 'react';
import './HoroscopeCard.css';

const HoroscopeCard = ({ selectedSign }) => {
  return (
    <div className="horoscope-card">
      <h1 className="title">AstroClash</h1>
      <h2 className="subtitle">Where You Don't Need to Know the Difference Between Astronomy & Astrology</h2>
    </div>
  )
}

export default HoroscopeCard;
