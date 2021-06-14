import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Astronomy from '../Astronomy/Astronomy';
import Astrology from '../Astrology/Astrology';

const MainPage = ({ saveFact, selectedSign, isClicked, saveScope, error }) => {
  return (
    <>
      <Route exact path="/" render={() => {
        return <Astronomy
          saveFact={saveFact}
          isClicked={isClicked}
          error={error}
        />
      }}
      />
      <Route exact path="/" render={() => {
        return <Astrology
          selectedSign={selectedSign}
          isClicked={isClicked}
          saveScope={saveScope}
          error={error}
        />
        }}
      />
    </>
  )
}

export default MainPage;
