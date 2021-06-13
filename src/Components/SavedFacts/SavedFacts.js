import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SavedCard from '../SavedCard/SavedCard';
import './SavedFacts.css';

class SavedFacts extends Component {
  constructor(props) {
    super(props);
      this.state = {
        savedFacts: props.savedFacts
      }
  }

  displayFactsCards = () => {
    if (!this.state.savedFacts.length) {
      return (
        <div className='nothing-saved'>
          <h1>🪐 You don't have any saved astronomy facts... Save your first fact today! 🌙</h1>
        </div>
      )
    } else {
      return this.state.savedFacts.map(fact => {
        return (
          <>
            <SavedCard
              date={fact.date}
              image={fact.url}
              description={fact.explanation}
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
            <h3>{this.state.savedFacts}</h3>
          </>
        }
        {!this.state.error  &&
          <>
`          <NavLink to='/'><button data-cy='home-button' className='home-button'>Back to Home Page</button></NavLink>
          <div className='saved-facts-display'>
            {this.displayFactsCards()}
          </div>`
          </>
        }
      </>
    )
  }
}

export default SavedFacts;
