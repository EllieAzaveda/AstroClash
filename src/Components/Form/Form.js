import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedSign: null,
      }
  }

  handleChange = (event) => {
    this.setState({ selectedSign: event.target.value })
  }

  handleClick = (event) => {
    event.preventDefault()
    this.props.setZodiacSign(this.state.selectedSign)
  }

  render() {
    return (
      <>
        <form className='form'>
          <NavLink to='/saved-astronomy-facts'>
            <button className='saved-button saved-facts-btn'>
              <img className='moon-icon' src='./moon.png' alt='moon icon'/>
            </button>
          </NavLink>
          <label for='saved-facts-btn' className='facts-label'>Saved Astronomy Facts</label>
          <select className='sign-dropdown'
            value={this.state.selectValue}
            onChange={(event) => this.handleChange(event)}>
            <option value='default-li'>Choose Your Sign</option>
            <option value='aries'>Aries (Mar 21 – Apr 19)</option>
            <option value='taurus'>Taurus (Apr 20 – May 20)</option>
            <option value='gemini'>Gemini (May 21 – Jun 21)</option>
            <option value='cancer'>Cancer (Jun 22 – Jul 22)</option>
            <option value='leo'>Leo (Jul 23 – Aug 22)</option>
            <option value='virgo'>Virgo (Aug 23 – Sep 22)</option>
            <option value='libra'>Libra (Sep 23 – Oct 23)</option>
            <option value='scorpius'>Scorpio (Oct 24 – Nov 21)</option>
            <option value='sagittarius'>Sagittarius (Nov 22 – Dec 21)</option>
            <option value='capricorn'>Capricorn (Dec 22 – Jan 19)</option>
            <option value='aquarius'>Aquarius (Jan 20 – Feb 18)</option>
            <option value='pisces'>Pisces (Feb 19 – Mar 20)</option>
          </select>
          <button data-cy='submit-button'
            className='submit-button'
            onClick={(event) => this.handleClick(event)}>
            SHOW ME THE DIFFERENCE
          </button>
          <label for='saved-facts-btn' className='scopes-label'>Saved Horoscopes</label>
          <NavLink to='/saved-horoscopes'>
            <button className='saved-button saved-scopes-btn'>
              <img className='moon-icon' src='./moon.png' alt='moon icon'/>
            </button>
          </NavLink>
        </form>
      </>
    )
  }
}

export default Form;
