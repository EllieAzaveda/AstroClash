import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './SavedFacts.css';

class SavedFacts extends Component {
  constructor(props) {
    super(props);
      this.state = {
        savedFacts: props.savedFacts
      }
  }

  getSavedFacts = () => {
    let retrievedFacts = localStorage.getItem("savedFacts");
    this.setState({ savedFacts: JSON.parse(retrievedFacts)})
    console.log(this.state.savedFacts)
  }

  displaySavedFacts = () => {
    return this.state.savedFacts.map(fact => {
      return (
        <div className='astronomy-card'>
          <h4>{fact.date}</h4>
          <h4>{fact.title}</h4>
          <img className='astronomy-image' src={fact.url} alt={`${fact.title}`}/>
          <h4>{fact.explanation}</h4>
          <h4>{fact.copyright}</h4>
        </div>
      )
    })
  }

  render() {
    return (
      <>
      <div className='saved-facts-display'>
        <NavLink to='/'><button data-cy='home-button' className='home-button'>Back to Home Page</button></NavLink>
          {!this.state.savedFacts.length &&
            <h4>💫 No Saved Facts 💫</h4>
          }
          {this.state.savedFacts.length > 0 &&
              <h1>yay length</h1>
          }
      </div>
      </>
    )
  }
}

export default SavedFacts;
