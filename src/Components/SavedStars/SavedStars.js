import React from 'react';
import './SavedStars.css';

const SavedStars = ({  }) => {
  return (
    <div className='saved-facts-display'>
      <NavLink to='/'><button data-cy='home-button' className='home-button'>Back to Home Page</button></NavLink>
    </div>
  )
}

export default SavedStars;
