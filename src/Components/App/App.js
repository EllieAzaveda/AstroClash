import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Astrology from '../Astrology/Astrology';
import Astronomy from '../Astronomy/Astronomy';
import Form from '../Form/Form';
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
        savedFacts: []
      }
  }

  setZodiacSign = (sign) => {
    let foundSign = this.state.allSigns.find(zodiac => zodiac.name === sign);
    this.setState({ selectedSign: foundSign });
    this.setState({ isClicked: true });
  };

  saveScope = (horoscopeData) => {
    if (!this.state.savedHoroscopes.find(scope => scope.current_date === horoscopeData.current_date)) {
      this.setState({ savedHoroscopes: [...this.state.savedHoroscopes, horoscopeData]})
      localStorage.setItem('savedHoroscopes', JSON.stringify([...this.state.savedHoroscopes, horoscopeData]));
    }
  }

  saveFact = (dailyFact) => {
    if (!this.state.savedFacts.find(fact => fact.date === dailyFact.date)) {
      console.log("savedFacts", dailyFact)
      this.setState({ savedFacts: [...this.state.savedFacts, dailyFact]})
      localStorage.setItem('savedFacts', JSON.stringify([...this.state.savedFacts, dailyFact]));
    }
  }

  render() {
    return (
      <>
        <article className='app'>
          <Header />
          <Route exact path="/" render={() => {
            return <Form setZodiacSign={this.setZodiacSign} />
          }}
          />
          <div className='app-container'>
            <Route exact path="/" render={() => {
              return <Astronomy
                saveFact={this.saveFact}
              />
            }}
            />
            <Route exact path="/" render={() => {
              return <Astrology
                selectedSign={this.state.selectedSign}
                isClicked={this.state.isClicked}
                saveScope={this.saveScope}
              />
              }}
            />
          </div>
        </article>
      </>
    )
  }
}

export default App;
