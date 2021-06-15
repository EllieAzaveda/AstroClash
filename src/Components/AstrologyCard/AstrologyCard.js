import React, { Component } from 'react';
import { fetchSingleHoroscope } from '../../Utils/APICalls';
import { cleanHoroscopeData } from '../../Utils/cleaningMethods';


class AstrologyCard extends Component {
  constructor(props){
      super(props);
        this.state = {
          signData: props.selectedSign,
          signName: props.selectedSign.name,
          horoscopeData: {},
          error: '',
          savedClicked: false
        }
  }

  handleScopeClick = (horoscopeData) => {
    this.setState({ savedClicked: true });
    this.props.saveScope(horoscopeData);
  }

  componentDidMount() {
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
      <>
      {this.state.error &&
          <h2>{this.state.error}</h2>
      }
      {!this.state.error &&
          <div className='astrology-card card'>
            <img className='astrology-image' src={`${this.state.signData.img_path}`} alt='Leo'/>
            <h3 className='title'>..| {this.state.signName} |..</h3>
            <h5 data-cy='daily-scope'>Daily Horoscope: {this.state.horoscopeData.description} </h5>
            <h5 data-cy='mood'>Mood: {this.state.horoscopeData.mood} </h5>
            <h5 data-cy='lucky-num'>Lucky Number: {this.state.horoscopeData.lucky_number} </h5>
            <h5 data-cy='color'>Color: {this.state.horoscopeData.color} </h5>
            <h5 data-cy='compatibility'>Love Compatibility: {this.state.horoscopeData.compatibility} </h5>
            <h5 className='save-feature'>
              <button data-cy='save-button' className={!this.state.savedClicked ? 'save-button' : 'already-saved'}>
                <img className='save-button-img' src='save-img.png' alt='save button' onClick={(event) => this.handleScopeClick(this.state.horoscopeData)}/>
              </button>
              <label htmlFor='save-button'>Save this Horoscope</label>
            </h5>
          </div>
      }
      </>
    )
  }
}

export default AstrologyCard;
