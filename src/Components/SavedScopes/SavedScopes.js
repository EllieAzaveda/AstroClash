import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SavedCard from '../SavedFacts/SavedFacts';
import './SavedScopes.css';

class SavedScopes extends Component {
  constructor(props) {
    super(props);
      this.state = {
        savedHoroscopes: props.savedHoroscopes,
        error: ''
      }
  }

  displayScopesCards = () => {
    if (!this.props.savedHoroscopes) {
      return (
        <div className='nothing-saved'>
          <NavLink to='/'><button data-cy='home-button' className='home-button'>Back to Home Page</button></NavLink>
          <h1>🔮 You don't have any saved horoscopes... Save your first prophecy today! 🔮</h1>
        </div>
      )
    } else {
      return this.state.savedHoroscopes.map(scope => {
        return (
          <>
          <NavLink to='/'><button data-cy='home-button' className='home-button'>Back to Home Page</button></NavLink>
          <SavedCard
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
    console.log("IN SCOPES", this.state.savedHoroscopes)
    return (
      <>
        {this.state.error  &&
          <h3>{this.state.savedHoroscopes}</h3>
        }
        {!this.state.error &&
        <div className='saved-scopes-display'>
          {this.displayScopesCards()}
        </div>
        }
      </>
    )
  }
}

export default SavedScopes;
