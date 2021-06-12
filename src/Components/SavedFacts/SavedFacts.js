import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SavedCard from '../SavedFacts/SavedFacts';
import './SavedFacts.css';

class SavedFacts extends Component {
  constructor(props) {
    super(props);
      this.state = {
        savedFacts: props.getSavedFacts()
      }
  }

  displayCards = () => {
    console.log("savedFacts", this.state.savedFacts)
    return this.state.savedFacts.map(fact => {
      return (
        <SavedCard
          date={fact.date}
          image={fact.url}
          description={fact.explanation}
        />
      )
    })
  }

  render() {
    return (
      <div className='saved-facts-display'>
        <NavLink to='/'><button data-cy='home-button' className='home-button'>Back to Home Page</button></NavLink>
        {this.displayCards()}
      </div>
    )
  }
}

export default SavedFacts;
