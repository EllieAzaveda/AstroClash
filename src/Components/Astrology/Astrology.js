import React from 'react';
import PropTypes from 'prop-types';
import AstrologyCard from '../AstrologyCard/AstrologyCard';
import './Astrology.css';

const Astrology = ({ selectedSign, isClicked, saveScope, error, savedClicked }) => {
  let id = Date.now()
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
            <AstrologyCard
              key={id}
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

Astrology.propTypes = {
  selectedSign:PropTypes.object,
  isClicked: PropTypes.bool,
  saveScope: PropTypes.func,
  error: PropTypes.string,
  savedClicked: PropTypes.bool
};

export default Astrology;
