import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
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
          <h1 className='nothing-msg'>🪐 You don't have any saved astronomy facts... Save your first fact today! 🌙</h1>
        </div>
      )
    } else {
      return this.state.savedFacts.map(fact => {
        return (
          <div className='astronomy-saved-card' key={fact.date}>
            <img data-cy='astronomy-image' className='astronomy-saved-image' src={fact.url} alt={`${fact.title}`}/>
            <div className='saved-explanation'>
              <h4 className='astronomy-saved-title'>..| {fact.title} |..</h4>
              <h4 className='astronomy-saved-explanation'>{fact.explanation}</h4>
            </div>
          </div>
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
            <NavLink to='/'><button data-cy='home-button' className='home-button'>Back to Home Page</button></NavLink>
            <div className='saved-facts-display'>
              {this.displayFactsCards()}
            </div>
          </>
        }
      </>
    )
  }
}

SavedFacts.propTypes = {
  savedFacts: PropTypes.array
};

export default SavedFacts;
