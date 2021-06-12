import React, { Component } from 'react';
import { fetchSingleHoroscope } from '../../Utils/APICalls';
import './HoroscopeCard.css';

class HoroscopeCard extends Component {
  constructor(props){
      super(props);
        this.state = {
          signData: props.selectedSign,
          signName: props.selectedSign.name,
          horoscopeData: {},
          error: ''
        }
  }

  componentDidMount () {
    fetchSingleHoroscope(this.state.signName)
      .then(singleHoroscope => {
        if(typeof singleHoroscope === 'string') {
          this.setState({ error: singleHoroscope })
        } else {
          this.setState({ horoscopeData: singleHoroscope })
        }
    })
      .catch(err => err.message)
  }

  render() {
    return (
      <div className='astrology-card'>
        <h4>{this.state.signName} </h4>
        <img className='astrology-image' src={`${this.state.signData.img_path}`} alt='Leo'/>
        <h4>Compatibility: {this.state.horoscopeData.compatibility} </h4>
        <h4>Lucky Number: {this.state.horoscopeData.lucky_number} </h4>
        <h4>Lucky Time: {this.state.horoscopeData.lucky_time} </h4>
        <h4>Color: {this.state.horoscopeData.color} </h4>
        <h4>Date Range: {this.state.horoscopeData.date_range} </h4>
        <h4>Mood: {this.state.horoscopeData.mood} </h4>
        <h4>Description: {this.state.horoscopeData.description} </h4>
      </div>
    )
  }
}

export default HoroscopeCard;
