Cypress.Commands.add('fillSignupForm', (user) => {
  cy.get('[data-qa="signup-name"]').type(user.name);
  cy.get('[data-qa="signup-email"]').type(user.email);
  cy.get('button[data-qa="signup-button"]').click();
});

Cypress.Commands.add('fillAccountInfo', (user) => {
  cy.get('#id_gender1').check();
  cy.get('input[name="password"]').type(user.password);
  cy.get('select[name="days"]').select('1');
  cy.get('select[name="months"]').select('January');
  cy.get('select[name="years"]').select('1990');
  cy.get('input[name="newsletter"]').check();
  cy.get('input[name="optin"]').check();
});

Cypress.Commands.add('fillAddressDetails', (user) => {
  cy.get('input[name="first_name"]').type(user.firstName);
  cy.get('input[name="last_name"]').type(user.lastName);
  cy.get('input[name="company"]').type(user.company);
  cy.get('input[name="address1"]').type(user.address1);
  cy.get('input[name="address2"]').type(user.address2);
  cy.get('select[name="country"]').select(user.country);
  cy.get('input[name="state"]').type(user.state);
  cy.get('input[name="city"]').type(user.city);
  cy.get('input[name="zipcode"]').type(user.zipcode);
  cy.get('input[name="mobile_number"]').type(user.mobileNumber);
});