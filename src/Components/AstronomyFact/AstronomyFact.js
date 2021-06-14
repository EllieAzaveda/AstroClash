import React from 'react';
import './AstronomyFact.css';

const AstronomyFact = ({ dailyFact, saveFact }) => {
  return (
    <div className='astronomy-card card'>
      <img data-cy='astronomy-image' className='astronomy-image' src={dailyFact.url} alt={`${dailyFact.title}`}/>
      <h3 data-cy='title' className='title'>..| {dailyFact.title} |..</h3>
      <h5 data-cy='explanation' className='explanation'>{dailyFact.explanation}</h5>
      <h5 data-cy='copyright'>Copyright: {dailyFact.copyright}</h5>
      <h5 className='save-feature'>
        <button data-cy='save-button' className='save-button'>
          <img className='save-button-img'src='save-img.png' alt='save button' onClick={(event) => saveFact(dailyFact)}/>
        </button>
        <label htmlFor='save-button'>Save this Fact</label>
      </h5>
    </div>
  )
}

export default AstronomyFact;
