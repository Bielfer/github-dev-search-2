describe('Page Home', () => {
  const baseUrl = Cypress.env('BASE_URL');

  it('button should navigate to the user page', () => {
    cy.visit(baseUrl);

    cy.get('input[data-testid=input]').type('test');
    cy.get('button[data-testid=button]').click();

    cy.url().should('include', '/test');
  });

  it('list should open', () => {
    cy.visit(baseUrl);

    cy.get('input[data-testid=input]').type('test');

    cy.get('button[data-testid=list-button]', { timeout: 3000 }).should(
      'be.visible'
    );
  });

  it('list button should redirect to user page', () => {
    cy.visit(baseUrl);

    cy.get('input[data-testid=input]').type('test');
    cy.get('button[data-testid=list-button]', { timeout: 3000 })
      .contains('test')
      .click();

    cy.url().should('include', '/test');
  });
});
