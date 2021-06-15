import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Astronomy from '../Astronomy/Astronomy';
import Astrology from '../Astrology/Astrology';

const MainPage = ({ saveFact, selectedSign, isClicked, saveScope, error }) => {
  return (
    <>
      {!error &&
        <>
        <Route exact path="/" render={() => {
          return <Astronomy
          saveFact={saveFact}
          isClicked={isClicked}
          />
        }}
        />
        <Route exact path="/" render={() => {
          return <Astrology
          selectedSign={selectedSign}
          isClicked={isClicked}
          saveScope={saveScope}
          />
        }}
        />
        </>
      }
    </>
  )
}

MainPage.propTypes = {
  saveFact: PropTypes.func,
  selectedSign: PropTypes.object,
  isClicked: PropTypes.bool,
  saveScope: PropTypes.func,
  error: PropTypes.string
};

export default MainPage;
