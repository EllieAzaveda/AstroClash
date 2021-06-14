import React, { Component } from 'react';
import AstronomyFact from '../AstronomyFact/AstronomyFact';
import { fetchDailyFact } from '../../Utils/APICalls';
import { cleanAstronomyData } from '../../Utils/cleaningMethods';
import './Astronomy.css';

class Astronomy extends Component {
  constructor(props){
      super(props);
      this.state = {
        dailyFact: {},
        isClicked: props.isClicked,
        error: ''
      }
  }

  componentDidMount () {
    fetchDailyFact()
      .then(dailyFact => {
        if(typeof dailyFact === 'string') {
          this.setState({ error: dailyFact })
        } else {
          this.setState({ dailyFact: cleanAstronomyData(dailyFact) })
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
      {!this.props.isClicked && !this.state.error &&
        <div className='main-astronomy-card card'>
          <div  className='card-border'>
            <img className='main-astronomy-image main-img' src='history-astro.png' alt='history of astronomy'/>
            <h3 className='main-title'>..| Astronomy |..</h3>
          </div>
        </div>
      }
      {this.props.isClicked && !this.state.error &&
        <AstronomyFact
          dailyFact={this.state.dailyFact}
          saveFact={this.props.saveFact}
        />
      }
      </>
    )
  }
}

export default Astronomy;
