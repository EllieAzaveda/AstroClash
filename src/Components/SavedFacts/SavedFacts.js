import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SavedCard from '../SavedFacts/SavedFacts';
import './SavedFacts.css';

class SavedFacts extends Component {
  constructor(props) {
    super(props);
      this.state = {
        savedFacts: props.savedFacts,
        error: ''
      }
  }

  displayFactsCards = () => {
    if (!this.state.savedFacts) {
      return (
        <div className='nothing-saved'>
          <NavLink to='/'><button data-cy='home-button' className='home-button'>Back to Home Page</button></NavLink>
          <h1>🪐 You don't have any saved astronomy facts... Save your first fact today! 🌙</h1>
        </div>
      )
    } else {
      this.state.savedFacts.map(fact => {
        return (
          <>
            <NavLink to='/'><button data-cy='home-button' className='home-button'>Back to Home Page</button></NavLink>
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
    console.log("IN FACTS", this.state.savedFacts)

    return (
      <>
        {this.state.error  &&
          <h3>{this.state.savedFacts}</h3>
        }
        {!this.state.error  &&
          <div className='saved-facts-display'>
            {this.displayFactsCards()}
          </div>
        }
      </>
    )
  }
}

export default SavedFacts;
