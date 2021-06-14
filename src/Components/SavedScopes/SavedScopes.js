import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SavedCard from '../SavedCard/SavedCard';
import './SavedScopes.css';

class SavedScopes extends Component {
  constructor(props) {
    super(props);
      this.state = {
        savedHoroscopes: props.savedHoroscopes
      }
  }

  displayScopesCards = () => {
    if (!this.state.savedHoroscopes.length) {
      return (
        <div className='nothing-saved'>
          <h1>🔮 You don't have any saved horoscopes... Save your first prophecy today! 🔮</h1>
        </div>
      )
    } else {
      return this.state.savedHoroscopes.map(scope => {
        return (
          <>
          <SavedCard
            key={scope.description}
            date={scope.date}
            image={scope.img_path}
            description={scope.description}
          />
          </>
        )
      })
    }
  }

  render() {
    return (
      <>
        {this.state.error  &&
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

export default SavedScopes;
