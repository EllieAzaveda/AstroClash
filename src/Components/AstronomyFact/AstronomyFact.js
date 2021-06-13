import React from 'react';
import './AstronomyFact.css';

const AstronomyFact = ({ dailyFact, saveFact }) => {
  return (
    <div className='astronomy-card'>
      <img className='astronomy-image' src={dailyFact.url} alt={`${dailyFact.title}`}/>
      <h3 className='title'>..| {dailyFact.title} |..</h3>
      <h5 className='explanation'>{dailyFact.explanation}</h5>
      <h5>Copyright: {dailyFact.copyright}</h5>
      <h5 className='save-feature'>
        <button className='save-button'>
          <img className='save-button-img'src='save-img.png' alt='save button' onClick={(event) => saveFact(dailyFact)}/>
        </button>
        <label htmlFor='save-button'>Save this Fact</label>
      </h5>
    </div>
  )
}

export default AstronomyFact;
