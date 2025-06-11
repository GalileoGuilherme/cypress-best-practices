
Cypress.Commands.add('loginViaAPI', (username, password) => {
  cy.request('POST', '/login', { username, password }).then((res) => {
    expect(res.status).to.eq(200);
    cy.setCookie('token', res.body.token);
  });
});
