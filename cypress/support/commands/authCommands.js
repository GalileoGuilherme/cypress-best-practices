
Cypress.Commands.add('reqresLogin', (email, password) => {
  cy.request('POST', 'https://reqres.in/api/login', { email, password })
    .its('body.token')
    .then(token => cy.wrap(token).as('token'));
});
