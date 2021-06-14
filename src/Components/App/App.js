import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Astronomy from '../Astronomy/Astronomy';
import Astrology from '../Astrology/Astrology';
import SavedFacts from '../SavedFacts/SavedFacts';
import SavedScopes from '../SavedScopes/SavedScopes';
import Form from '../Form/Form';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { signs } from './../../Utils/signs.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
      this.state = {
        allSigns: signs,
        selectedSign: null,
        isClicked: false,
        savedHoroscopes: [],
        savedFacts: [],
        error: ''
      }
  }

  setZodiacSign = (sign) => {
    let foundSign = this.state.allSigns.find(zodiac => zodiac.name === sign);
    if (foundSign.name !== this.state.selectedSign) {
      this.setState({ selectedSign: foundSign });
      this.setState({ isClicked: true });
    }
  };

  saveScope = (horoscopeData) => {
    if (!this.state.savedHoroscopes.find(scope => scope.current_date === horoscopeData.current_date)) {
      this.setState({ savedHoroscopes: [...this.state.savedHoroscopes, horoscopeData]})
      localStorage.setItem('savedHoroscopes', JSON.stringify([...this.state.savedHoroscopes, horoscopeData]));
    }
  }

  saveFact = (dailyFact) => {
    if (!this.state.savedFacts.find(fact => fact.date === dailyFact.date)) {
      this.setState({ savedFacts: [...this.state.savedFacts, dailyFact]})
      localStorage.setItem('savedFacts', JSON.stringify([...this.state.savedFacts, dailyFact]));
    }
  }

  render() {
    return (
      <>
        <article className='app'>
          <Header
            savedHoroscopes={this.displaySavedScopes}
            savedFacts={this.displaySavedFacts}
          />
          <Route exact path="/" render={() => {
            return <Form
              setZodiacSign={this.setZodiacSign}
              isClicked={this.state.isClicked}
            />
          }}
          />
          {this.state.error &&
            <Route path="/404" render={() => {
              return <NotFoundPage />
              }}
            />
          }
          {!this.state.error &&
          <div className='app-container'>
            <Route exact path="/" render={() => {
              return <Astronomy
                saveFact={this.saveFact}
                isClicked={this.state.isClicked}
                error={this.state.error}
              />
            }}
            />
            <Route exact path="/" render={() => {
              return <Astrology
                selectedSign={this.state.selectedSign}
                isClicked={this.state.isClicked}
                saveScope={this.saveScope}
                refreshPage={this.refreshPage}
                error={this.state.error}
              />
              }}
            />
            <Route exact path="/saved-astronomy-facts" render={() => {
              return <SavedFacts
                savedFacts={this.state.savedFacts}
              />
              }}
            />
            <Route exact path="/saved-horoscopes" render={() => {
              return <SavedScopes
                savedHoroscopes={this.state.savedHoroscopes}
              />
              }}
            />
            <Route path="/404" render={() => {
              return <NotFoundPage />
              }}
            />
          </div>
          }
        </article>
      </>
    )
  }
}

export default App;
