/// <reference types="cypress"/>
describe('Home Page', () => {
  it('should load the home page successfully', () => {
    cy.visit('/'); // ✅ Visit the base URL (Vite app)
    cy.contains('Most Popular Articles').should('be.visible');
  });

  it('should navigate to an article detail page', () => {
    cy.visit('/');
    cy.get('a').first().click(); // ✅ Click the first article link
    cy.url().should('include', '/article/');
    cy.contains('Read Full Article').should('be.visible');
  });
});
