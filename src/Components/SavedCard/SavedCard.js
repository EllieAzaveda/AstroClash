import React from 'react';
import './SavedCard.css';

const SavedCard = ({ date, image, description }) => {
  return (
    <div className='saved-card'>
      <h4>Date: {date} </h4>
      <img className='saved-image' src={`${image}`} alt='saved'/>
      <h4>Description: {description} </h4>
    </div>
  )
}

export default SavedCard;
