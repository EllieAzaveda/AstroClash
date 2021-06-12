import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SavedCard from '../SavedFacts/SavedFacts';
import './SavedScopes.css';

class SavedScopes extends Component {
  constructor(props) {
    super(props);
      this.state = {
        savedHoroscopes: props.getSavedScopes()
      }
  }

  displayCards = () => {
    console.log("savedHoroscopes", this.state.savedHoroscopes)
    return this.state.savedHoroscopes.map(scope => {
      return (
        <SavedCard
          date={scope.date}
          image={scope.img_path}
          description={scope.description}
        />
      )
    })
  }

  render() {
    return (
      <div className='saved-scopes-display'>
        <NavLink to='/'><button data-cy='home-button' className='home-button'>Back to Home Page</button></NavLink>
        {this.displayCards()}
      </div>
    )
  }
}

export default SavedScopes;
