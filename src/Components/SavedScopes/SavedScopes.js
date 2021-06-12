import React from 'react';
import './SavedScopes.css';

const SavedScopes = ({  }) => {
  return (
    <div className='saved-horoscopes-display'>
      <NavLink to='/'><button data-cy='home-button' className='home-button'>Back to Home Page</button></NavLink>
    </div>
  )
}

export default SavedScopes;
