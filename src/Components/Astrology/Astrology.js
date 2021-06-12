import React from 'react';
import HoroscopeCard from '../HoroscopeCard/HoroscopeCard';
import './Astrology.css';

const Astrology = ({ selectedSign, isClicked, saveScope }) => {
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
            saveScope={saveScope}
          />
        }
      </div>
    </>
  )
}

export default Astrology;
