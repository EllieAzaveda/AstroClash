import React from 'react';
import './AstronomyFact.css';

const AstronomyFact = ({ dailyFact, saveFact }) => {
  return (
    <div className='astronomy-card'>
      <img className='astronomy-image' src={dailyFact.url} alt={`${dailyFact.title}`}/>
      <h3 className='title'>..| {dailyFact.title} |..</h3>
      <h5 className='explanation'>{dailyFact.explanation}</h5>
      <h5>{dailyFact.copyright}</h5>
      <button className='save-button' onClick={(event) => saveFact(dailyFact)}>Save Fact</button>
    </div>
  )
}

export default AstronomyFact;
