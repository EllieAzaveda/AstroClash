import React, { Component } from 'react';
// import { signs } from './../../Utils/signs.js'
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedSign: null,
      }
  }

  handleClick = (event) => {
    event.preventDefault()
    this.setState({ selectValue: event.target.value });
    this.props.setZodiacSign(this.state.selectValue)
  }

  render() {
    return (
      <>
        <form>
          <select
            className='sign-dropdown'
            value={this.state.selectValue}
            onChange={this.handleClick}
          >
            <option value='default-li'>Choose Your Sign</option>
            <option value='Aries'>Aries (March 21–April 19)</option>
            <option value='Taurus'>Taurus (April 20–May 20)</option>
            <option value='Gemini'>Gemini (May 21–June 21)</option>
            <option value='Cancer'>Cancer (June 22–July 22)</option>
            <option value='Leo'>Leo (July 23–August 22)</option>
            <option value='Virgo'>Virgo (August 23–September 22)</option>
            <option value='Libra'>Libra (September 23–October 23)</option>
            <option value='Scorpius'>Scorpius (October 24–November 21)</option>
            <option value='Sagittarius'>Sagittarius (November 22–December 21)</option>
            <option value='Capricorn'>Capricorn (December 22–January 19)</option>
            <option value='Aquarius'>Aquarius (January 20–February 18)</option>
            <option value='Pisces'>Pisces (February 19–March 20)</option>
          </select>
          <button onClick={(event) => this.handleClick(event)}>Update My Sign</button>
        </form>
      </>
    )
  }
}

export default Form;
