import React, { Component } from 'react';
import Header from '../Header/Header';
import Astrology from '../Astrology/Astrology';
import Astronomy from '../Astronomy/Astronomy';

class App extends Component {
  constructor() {
    super();
      this.state = {

      }
  }

  render() {
    return (
      <>
        <Header />
        <Astrology />
        <Astronomy />
      </>
    )
  }
}

export default App;
