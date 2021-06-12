import React from 'react';
import HoroscopeCard from '../HoroscopeCard/HoroscopeCard';
import './Astrology.css';

const Astrology = ({ selectedSign, isClicked }) => {
  return (
    <>
      <div className='astrology-card'>
        {!isClicked &&
          <div className='astrology-card'>
            <h4>Select Your Sign!</h4>
          </div>
        }
        {isClicked &&
          <HoroscopeCard
            selectedSign={selectedSign}
          />
        }
      </div>
    </>
  )
}

export default Astrology;
