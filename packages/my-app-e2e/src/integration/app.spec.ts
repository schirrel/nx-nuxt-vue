describe('my-app', () => {
  it('should display welcome message', () => {
    cy.visit('/');
    cy.contains('h2', 'Welcome to your Nuxt Application');
  });
});
