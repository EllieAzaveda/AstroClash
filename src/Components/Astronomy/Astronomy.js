import React, { Component } from 'react';
import { fetchDailyFact } from '../../Utils/APICalls';
import './Astronomy.css';

class Astronomy extends Component {
    constructor(props){
        super(props);
        this.state = {
          dailyFact: {},
          error: ''
        }
    }

    componentDidMount () {
      fetchDailyFact()
        .then(dailyFact => {
          if(typeof dailyFact === 'string') {
            this.setState({ error: dailyFact })
          } else {
            this.setState({ dailyFact: dailyFact })
          }
        })
        .catch(err => err.message)
    }

    render() {
      console.log(this.state.dailyFact)
        return (
          <div>
            <h4>{this.state.dailyFact.title}</h4>
            <img className='astronomy-image' src={this.state.dailyFact.url} alt={`${this.state.dailyFact.title}`}/>
            <h4>{this.state.dailyFact.explanation}</h4>
            <h4>{this.state.dailyFact.copyright}</h4>
          </div>
        );
    }
}

export default Astronomy;
