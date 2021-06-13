describe('Show main view of AstroClash App', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('Should be able to visit the main page', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  });

  it('Should display the title, and subtitle of the page upon loading', () => {
    cy.contains('nav>h1', 'AstroClash')
      .get('nav .subtitle').should('contain', 'WHERE YOU DON\'T NEED TO KNOW THE DIFFERENCE BETWEEN ASTRONOMY & ASTROLOGY')
  });

})
