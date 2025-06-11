/// <reference types="cypress" />

describe('Login via UI', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('deve realizar login com sucesso usando a UI', () => {
    cy.get('input[name="username"]').type('teste');
    cy.get('input[name="password"]').type('senha123');
    cy.get('button[type="submit"]').click();

    cy.contains('Bem-vindo').should('be.visible');
  });

  it('deve visitar uma página protegida após login via API', () => {
    cy.loginViaAPI('teste', 'senha123');
    cy.visit('/dashboard');
    cy.contains('Painel do Usuário').should('be.visible');
  });
});