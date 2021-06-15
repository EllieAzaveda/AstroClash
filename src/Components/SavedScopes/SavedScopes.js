import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signs } from './../../Utils/signs.js'
import './SavedScopes.css';

class SavedScopes extends Component {
  constructor(props) {
    super(props);
      this.state = {
        savedHoroscopes: props.savedHoroscopes,
        allSigns: signs,
      }
  }

  displayScopesCards = () => {
    if (!this.state.savedHoroscopes.length) {
      return (
        <div className='nothing-saved'>
          <h1 className='nothing-msg'>🔮 You don't have any saved horoscopes... Save your first prophecy today! 🔮</h1>
        </div>
      )
    } else {
      return this.state.savedHoroscopes.map(scope => {
        return (
          <div className='astrology-saved-card' key={scope.lucky_number}>
            <h4 className='astrology-saved-description'>{scope.description}</h4>
          </div>
        )
      })
    }
  }

  render() {
    return (
      <>
        {this.state.error &&
          <>
            <NavLink to='/'><button data-cy='home-button' className='home-button'>Back to Home Page</button></NavLink>
            <h3>{this.state.savedHoroscopes}</h3>
          </>
        }
        {!this.state.error &&
          <>
            <NavLink to='/'><button data-cy='home-button' className='home-button'>Back to Home Page</button></NavLink>
            <div className='saved-scopes-display'>
              {this.displayScopesCards()}
            </div>
          </>
        }
      </>
    )
  }
}

SavedScopes.propTypes = {
  savedHoroscopes:PropTypes.array
};

export default SavedScopes;
