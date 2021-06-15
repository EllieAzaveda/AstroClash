import React, { Component } from 'react';
import { fetchDailyFact } from '../../Utils/APICalls';
import { cleanAstronomyData } from '../../Utils/cleaningMethods';
import './Astronomy.css';

class Astronomy extends Component {
  constructor(props){
      super(props);
      this.state = {
        dailyFact: {},
        isClicked: props.isClicked,
        error: '',
        savedClicked: false
      }
  }

  handleFactClick = (factData) => {
    this.setState({ savedClicked: true });
    this.props.saveFact(factData);
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
        <div className='astronomy-card card'>
          <img data-cy='astronomy-image' className='astronomy-image' src={this.state.dailyFact.url} alt={`${this.state.dailyFact.title}`}/>
          <h3 data-cy='title' className='title'>..| {this.state.dailyFact.title} |..</h3>
          <h5 data-cy='explanation' className='explanation'>{this.state.dailyFact.explanation}</h5>
          <h5 data-cy='copyright'>Copyright: {this.state.dailyFact.copyright}</h5>
          <h5 className='save-feature'>
            <button data-cy='save-button' className={!this.state.savedClicked ? 'save-button' : 'already-saved'}>
              <img className='save-button-img'src='save-img.png' alt='save button' onClick={(event) => this.handleFactClick(this.state.dailyFact)}/>
            </button>
            <label htmlFor='save-button'>Save this Fact</label>
          </h5>
        </div>
      }
      </>
    )
  }
}

export default Astronomy;
