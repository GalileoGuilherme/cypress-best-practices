/// <reference types="cypress" />

describe('API Login', () => {
  it('deve fazer login com sucesso', () => {
    cy.request('POST', '/login', {
      username: 'teste',
      password: 'senha123'
    }).then((res) => {
      expect(res.status).to.eq(200);
      cy.setCookie('token', res.body.token); // Armazena o token para testes UI
    });
  });
});
