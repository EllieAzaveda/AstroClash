import React from 'react';
import './SavedCard.css';

const SavedCard = ({ date, description }) => {
  return (
    <div className='saved-card'>
      <h4 className='saved-description'>{description}</h4>
    </div>
  )
}

export default SavedCard;
