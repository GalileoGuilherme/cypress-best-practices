/// <reference types="cypress" />

import { userDetails } from '../../support/globals';

describe('Cadastro de usuário', () => {
  before(() => {
    cy.visit('http://automationexercise.com');
  });

  it('Deve realizar o cadastro e deletar a conta', () => {
    cy.get('a[href="/login"]').click();
    cy.contains('New User Signup!').should('be.visible');

    cy.fillSignupForm(userDetails);
    cy.contains('Enter Account Information').should('be.visible');

    cy.fillAccountInfo(userDetails);
    cy.fillAddressDetails(userDetails);

    cy.get('[data-qa="create-account"]').click();
    cy.contains('Account Created!').should('be.visible');
    cy.get('a[data-qa="continue-button"]').click();

    cy.contains(`Logged in as ${userDetails.name}`);
    cy.get('a[href="/delete_account"]').click();
    cy.contains('Account Deleted!').should('be.visible');
    cy.get('a[data-qa="continue-button"]').click();
  });
});
