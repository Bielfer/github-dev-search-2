describe('Page User By Login', () => {
  const baseUrl = Cypress.env('BASE_URL');

  it('button should navigate to the home page', () => {
    cy.visit(`${baseUrl}/bielfer`);

    cy.get('button').contains('Voltar').click();

    cy.url().should('include', '/');
  });

  it('select should change value', () => {
    cy.visit(`${baseUrl}/bielfer`);

    cy.get('select').select('stars-asc');
    cy.get('select').should('have.value', 'stars-asc');

    cy.get('select').select('stars-desc');
    cy.get('select').should('have.value', 'stars-desc');
  });
});
