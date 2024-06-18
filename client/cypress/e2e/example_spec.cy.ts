describe('Example test', () => {
  it('Visits the homepage', () => {
    cy.visit('/');
    cy.contains('Udri Plus');
  });
});
