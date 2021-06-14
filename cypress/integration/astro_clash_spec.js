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
  })

  it('Should display a default astronomy card on main page', () => {
    cy.get('.main-astrology-card').find('.main-astrology-image').should('be.visible')
      .get('.card-border > .main-title').should('contain', '..| Astrology |..')
  })
})

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
      .get('.saved-scopes-display > .saved-card').find(':nth-child(1)').should('contain', 'Date:')
      .get('.saved-scopes-display > .saved-card').find(':nth-child(2)').should('have.attr', 'src')
      .get('.saved-scopes-display > .saved-card').find(':nth-child(3)').should('contain', 'Description:')
  });

  it('Should display a message when no horoscopes are saved', () => {
    cy.get('form').find('.saved-scopes-btn').click()
      .url().should('include', '/saved-horoscopes')
      .get('.saved-scopes-display > .nothing-saved').find('h1').should('contain', '🔮 You don\'t have any saved horoscopes... Save your first prophecy today! 🔮')
  });


})
