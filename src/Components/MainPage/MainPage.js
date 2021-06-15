import React from 'react';
import { Route } from 'react-router-dom';
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

export default MainPage;
