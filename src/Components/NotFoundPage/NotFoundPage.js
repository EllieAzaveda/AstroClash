import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div>
      <NavLink to='/'><button data-cy='home-button' className='home-button'>Back to Home Page</button></NavLink>
      <img className='error-img' src="404Error.jpeg"  alt="page not found purple pink and green 404 in circle" style={{textAlign:"center"}} />
    </div>
  )
}

export default NotFoundPage;
