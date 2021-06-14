import React from 'react';
import HoroscopeCard from '../HoroscopeCard/HoroscopeCard';
import './Astrology.css';

const Astrology = ({ selectedSign, isClicked, saveScope, error, savedClicked }) => {
  return (
    <>
        {!isClicked &&
          <div className='main-astrology-card card'>
            <div  className='card-border'>
              <img className='main-astrology-image main-img' src='zodiac-wheel.jpeg' alt='zodiac wheel'/>
              <h3 className='main-title'>..| Astrology |..</h3>
            </div>
          </div>
        }
        {isClicked &&
          <>
            <HoroscopeCard
              selectedSign={selectedSign}
              saveScope={saveScope}
              error={error}
              savedClicked={savedClicked}
            />
          </>
        }
    </>
  )
}

export default Astrology;
