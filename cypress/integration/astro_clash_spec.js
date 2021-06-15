describe('Show main view of AstroClash App', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('Should be able to visit the main page', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  });

  it('Should display the title and subtitle of the page upon loading', () => {
    cy.contains('nav > h1', 'AstroClash')
      .get('nav .subtitle').should('contain', 'WHERE YOU DON\'T NEED TO KNOW THE DIFFERENCE BETWEEN ASTRONOMY & ASTROLOGY')
  });

  it('Should display the dropdown and corresponding button, and saved items buttons', () => {
    cy.get('form').find('.sign-dropdown').should('be.visible')
      .get('form').find('[data-cy=submit-button]').should('contain', 'SHOW ME THE DIFFERENCE')
      .get('form').find('[href="/saved-astronomy-facts"] > .saved-button > .moon-icon').should('be.visible')
      .get('form').find('.facts-label').should('contain', 'Saved Astronomy Facts')
      .get('form').find('.scopes-label').should('contain', 'Saved Horoscopes')
  });

  it('Should display a default astronomy card on main page', () => {
    cy.get('.main-astronomy-card').find('.main-astronomy-image').should('be.visible')
      .get('.card-border > .main-title').should('contain', '..| Astronomy |..')
  });

  it('Should display a default astronomy card on main page', () => {
    cy.get('.main-astrology-card').find('.main-astrology-image').should('be.visible')
      .get('.card-border > .main-title').should('contain', '..| Astrology |..')
  });

  it('Should display an alert if no zodiac sign is selected', () => {
    const stub = cy.stub()
    cy.on ('window:alert', stub)
    cy.get('form').find('[data-cy=submit-button]').click()
    .then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Please select your zodiac sign (Psst! If you don\'t know it, find your birthday in the ranges!)')
    })
  });

});

describe('The user should be able to interact with the Astrology side of the AstroClash App', () => {

  beforeEach(() => {
    cy.fixture('mockHoroscopeData.json')
      .then(mockData => {
        cy.intercept('POST', 'https://aztro.sameerkumar.website/?sign=leo&day=today', {
          statusCode: 201,
          delay: 100,
          body: mockData
        })
      })
    cy.visit('http://localhost:3000')
  });

  it('Should display a horoscope and zodiac info when leo is chosen', () => {
    cy.get('form').find('.sign-dropdown').select('leo')
      .get('form').find('[data-cy=submit-button]').click()
      .get('.astrology-card').find('.astrology-image').should('have.attr', 'src', 'leo.png')
      .get('.astrology-card > .title').should('contain', '..| leo |..')
      .get('.astrology-card').find('[data-cy=daily-scope]').should('contain', 'You feel the urge to splurge today.')
      .get('.astrology-card').find('[data-cy=mood]').should('contain', 'Cautious')
      .get('.astrology-card').find('[data-cy=lucky-num]').should('contain', '74')
      .get('.astrology-card').find('[data-cy=color]').should('contain', 'Pink')
      .get('.astrology-card').find('[data-cy=compatibility]').should('contain', 'Aquarius')
  });

  it('Should be able to save a horoscope and zodiac info when leo is chosen and saved', () => {
    cy.get('form').find('.sign-dropdown').select('leo')
      .get('form').find('[data-cy=submit-button]').click()
      .get('.astrology-card > .save-feature').find('[data-cy=save-button]').click()
      .get('form').find('.saved-scopes-btn').click()
      .url().should('include', '/saved-horoscopes')
      .get('.astrology-saved-card').find('[data-cy=astrology-saved-date]').should('contain', 'Date:')
      .get('.astrology-saved-card').find('[data-cy=astrology-saved-description]').should('contain', 'Description:')
  });

  it('Should display a message when no horoscopes are saved', () => {
    cy.get('form').find('.saved-scopes-btn').click()
      .url().should('include', '/saved-horoscopes')
      .get('.saved-scopes-display > .nothing-saved').find('h1').should('contain', '🔮 You don\'t have any saved horoscopes... Save your first prophecy today! 🔮')
  });

  it('Should display a back to home button on the saved display page', () => {
    cy.get('form').find('.saved-scopes-btn').click()
      .url().should('include', '/saved-horoscopes')
      .get('.app-container').find('[data-cy=home-button]').should('contain', 'Back to Home')
  });
});

describe('500 error handling for astrology api call', () => {
  it('Displays a 500 error message when the server is down', () => {
    cy.intercept('POST', 'https://aztro.sameerkumar.website/?sign=leo&day=today', {
      statusCode: 500,
      delay: 200
    })
    cy.visit('http://localhost:3000')
      .get('form').find('.sign-dropdown').select('leo')
      .get('form').find('[data-cy=submit-button]').click()
      .get('.app-container').find('h2').should('contain', 'Uhoh! Something is wrong with our system. Please try back later.')
  });
});

describe('The user should be able to interact with the Astronomy side of the AstroClash App', () => {

  beforeEach(() => {
    cy.fixture('mockNasaData.json')
      .then(mockData => {
        cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?api_key=xCENGAkMUeSm4npGMPsHqwBltGKg0M0FYSLHdiPw', {
          statusCode: 201,
          delay: 100,
          body: mockData
        })
      })
    cy.visit('http://localhost:3000')
  });

  it('Should display a NASA astronomy info when show me the difference button is clicked', () => {
    cy.get('form').find('.sign-dropdown').select('leo')
      .get('form').find('[data-cy=submit-button]').click()
      .get('.astronomy-card').find('.astronomy-image').should('have.attr', 'src', 'http://www.weathernationtv.com/app/uploads/5-18_2126_rhp_wright-wy_storm-structure_TW_@wxstorm.jpg')
      .get('.astronomy-card').find('[data-cy=title]').should('contain', 'A Supercell Thunderstorm Over Texas')
      .get('.astronomy-card').find('[data-cy=explanation]').should('contain', 'Is that a cloud or an alien spaceship?')
      .get('.astronomy-card').find('[data-cy=copyright]').should('contain', 'Mike Olbinski Music: Incompetech')
  });

  it('Should be able to save astronomy info when save button is clicked', () => {
    cy.get('form').find('.sign-dropdown').select('leo')
      .get('form').find('[data-cy=submit-button]').click()
      .get('.astronomy-card > .save-feature').find('.save-button').click()
      .get('form').find('.saved-facts-btn').click()
      .url().should('include', '/saved-astronomy-facts')
      .get('[data-cy=astronomy-image]').should('have.attr', 'src', 'http://www.weathernationtv.com/app/uploads/5-18_2126_rhp_wright-wy_storm-structure_TW_@wxstorm.jpg')
      .get('[data-cy=astronomy-saved-title]').should('contain', 'A Supercell Thunderstorm Over Texas')
      .get('[data-cy=astronomy-saved-explanation]').should('contain', 'Is that a cloud or an alien spaceship?')
  });

  it('Should display a message when no facts are saved', () => {
    cy.get('form').find('.saved-facts-btn').click()
      .url().should('include', '/saved-astronomy-facts')
      .get('.saved-facts-display > .nothing-saved').find('h1').should('contain', '🪐 You don\'t have any saved astronomy facts... Save your first fact today! 🌙')
  });

  it('Should display a back to home button on the saved display page', () => {
    cy.get('form').find('.saved-facts-btn').click()
      .url().should('include', '/saved-astronomy-facts')
      .get('.app-container').find('[data-cy=home-button]').should('contain', 'Back to Home')
  });

});

describe('404 error handling display renders with a 404 error', () => {
  it('Displays a 404 error image to the user', () => {
    cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?api_key=xCENGAkMUeSm4npGMPsHqwBltGKg0M0FYSLHdiPw', {
      statusCode: 404,
      delay: 200
    })
    cy.visit('http://localhost:3000/404')
      .url().should('eq', 'http://localhost:3000/404')
      .get('.app-container > div').find('.error-img').should('have.attr', 'src', '404Error.jpeg')
  });
});

describe('500 error handling for astronomy api call', () => {
  it('Displays a 500 error message when the server is down', () => {
    cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?api_key=xCENGAkMUeSm4npGMPsHqwBltGKg0M0FYSLHdiPw', {
      statusCode: 500,
      delay: 200
    })
    cy.visit('http://localhost:3000')
      .get('form').find('.sign-dropdown').select('leo')
      .get('form').find('[data-cy=submit-button]').click()
      .get('.app-container').find('h2').should('contain', 'Uhoh! Something is wrong with our system. Please try back later.')
  });
});


describe('404 error display renders when unknown url path is used', () => {
  it('Displays a different message when a 404 error comes through to the user', () => {
    cy.intercept('POST', 'https://aztro.sameerkumar.website/?sign=leo&day=today', {
      statusCode: 404,
      delay: 200
    })
    cy.visit('http://localhost:3000/bleeblahbloopwrong')
      .url().should('eq', 'http://localhost:3000/bleeblahbloopwrong')
      .get('.app-container > div').find('.error-img').should('have.attr', 'src', '404Error.jpeg')
  });
});
