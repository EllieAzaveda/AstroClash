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
        isClicked: false
      }
  }

  setZodiacSign = (sign) => {
    let foundSign = this.state.allSigns.find(zodiac => zodiac.name === sign);
    this.setState({ selectedSign: foundSign });
    this.setState({ isClicked: true });
  };

  render() {
    return (
      <>
        <article className='App'>
          <Header />
          <Route exact path="/" render={() => {
            return <Form setZodiacSign={this.setZodiacSign} />
            }}
          />
          <Route exact path="/" render={() => {
            return <Astrology
              selectedSign={this.state.selectedSign}
              isClicked={this.state.isClicked}
            />
            }}
          />
          <Route exact path="/" render={() => {
            return <Astronomy />
            }}
          />
        </article>
      </>
    )
  }
}

export default App;
