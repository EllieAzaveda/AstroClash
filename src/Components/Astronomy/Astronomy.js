import React, { Component } from 'react';
import AstronomyFact from '../AstronomyFact/AstronomyFact';
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
        return (
          <AstronomyFact
            dailyFact={this.state.dailyFact}
            saveFact={this.props.saveFact}
          />
        )
    }
}

export default Astronomy;
