import React, { Component } from 'react';
import Header from '../Header/Header';
import Astrology from '../Astrology/Astrology';
import Astronomy from '../Astronomy/Astronomy';
import Form from '../Form/Form';
// import { signs } from './../../Utils/signs.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
      this.state = {
        selectedSign: null,
      }
  }

  setZodiacSign = (sign) => {
    this.setState({ selectedSign: sign })
  }

  render() {
    return (
      <>
        <Header />
        <Form
          setZodiacSign={this.setZodiacSign}
        />
        <Astrology />
        <Astronomy />
      </>
    )
  }
}

export default App;
