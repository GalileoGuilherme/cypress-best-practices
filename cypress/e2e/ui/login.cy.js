/// <reference types="cypress" />

describe('SauceDemo UI Login', () => {
  it('faz login com usuário válido', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.inventory_list').should('be.visible');
  });
});