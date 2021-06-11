import React, { Component } from 'react';
import { fetchSingleHoroscope } from '../../Utils/APICalls';
import { signs } from './../../Utils/signs.js'
import './Astrology.css';

class Astrology extends Component {
    constructor(props){
        super(props);
        this.state = {
          horoscopeData: {},
          error: ''
        }
    }

    componentDidMount () {
      fetchSingleHoroscope('leo')
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
      // let signImg = signs[4].img_path
      let signImg = 'Leo.png'
        return (
          <div className='astrology-card'>
            <img className='astrology-image' src={`${signImg}`} alt='Leo'/>
            <h4>Compatibility: {this.state.horoscopeData.compatibility} </h4>
            <h4>Lucky Number: {this.state.horoscopeData.lucky_number} </h4>
            <h4>Lucky Time: {this.state.horoscopeData.lucky_time} </h4>
            <h4>Color: {this.state.horoscopeData.color} </h4>
            <h4>Date Range: {this.state.horoscopeData.date_range} </h4>
            <h4>Mood: {this.state.horoscopeData.mood} </h4>
            <h4>Description: {this.state.horoscopeData.description} </h4>
          </div>
        );
    }
}

export default Astrology;
