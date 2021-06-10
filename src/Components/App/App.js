import React, { Component } from 'react';
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
        <h1>Astro Clash</h1>
        <Astrology />
        <Astronomy />
      </>
    )
  }
}

export default App;
