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
      .get('form').find('[data-cy=submit-button]').should('be.visible')
      .get('form').find('[href="/saved-astronomy-facts"] > .saved-button > .moon-icon').should('be.visible')
      .get('form').find('.facts-label').should('contain', 'Saved Astronomy Facts')
      .get('form').find('.scopes-label').should('contain', 'Saved Horoscopes')
  });

  it('Should display a default astronomy card on main page', () => {
    cy.get('.main-astronomy-card').find('.main-astronomy-image').should('be.visible')
      .get('.card-border > .main-title').should('contain', '..| Astronomy |..')
  })

})
