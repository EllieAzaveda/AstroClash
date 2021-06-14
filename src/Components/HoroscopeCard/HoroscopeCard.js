import React, { Component } from 'react';
import { fetchSingleHoroscope } from '../../Utils/APICalls';
import { cleanHoroscopeData } from '../../Utils/cleaningMethods';
import './HoroscopeCard.css';

class HoroscopeCard extends Component {
  constructor(props){
      super(props);
        this.state = {
          signData: props.selectedSign,
          signName: props.selectedSign.name,
          horoscopeData: {},
          error: props.error
        }
  }

  componentDidMount () {
    fetchSingleHoroscope(this.state.signName)
      .then(singleHoroscope => {
        if(typeof singleHoroscope === 'string') {
          this.setState({ error: singleHoroscope })
        } else {
          this.setState({ horoscopeData: cleanHoroscopeData(singleHoroscope) })
        }
    })
    .catch(err => err.message)
  }

  render() {
    return (
      <div className='astrology-card'>
        <img className='astrology-image' src={`${this.state.signData.img_path}`} alt='Leo'/>
        <h3 className='title'>..| {this.state.signName} |..</h3>
        <h5 data-cy='daily-scope'>Daily Horoscope: {this.state.horoscopeData.description} </h5>
        <h5 data-cy='mood'>Mood: {this.state.horoscopeData.mood} </h5>
        <h5 data-cy='lucky-num'>Lucky Number: {this.state.horoscopeData.lucky_number} </h5>
        <h5 data-cy='color'>Color: {this.state.horoscopeData.color} </h5>
        <h5 data-cy='compatibility'>Love Compatibility: {this.state.horoscopeData.compatibility} </h5>
        <h5 className='save-feature'>
          <button data-cy='save-button' className='save-button'>
            <img className='save-button-img' src='save-img.png' alt='save button' onClick={(event) => this.props.saveScope(this.state.horoscopeData)}/>
          </button>
          <label htmlFor='save-button'>Save this Horoscope</label>
        </h5>
      </div>
    )
  }
}

export default HoroscopeCard;
