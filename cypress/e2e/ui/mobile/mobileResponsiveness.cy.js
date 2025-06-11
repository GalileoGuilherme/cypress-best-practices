/// <reference types="cypress" />

const devices = ['iphone-5', 'iphone-6', 'iphone-x', 'samsung-s10', 'ipad-mini']

describe('Responsividade - Mobile - automationexercise.com', () => {
  devices.forEach((device) => {
    context(`📱 Dispositivo: ${device}`, () => {
      beforeEach(() => {
        cy.visitAsMobile(device)
      })

      it('Deve exibir corretamente a view no mobile', () => {
        cy.assertMobileViewIsVisible()
      })

      it('Deve exibir conteúdo principal da home', () => {
        cy.assertMainContent()
      })

      it('Deve mostrar o menu mobile com o botão de menu', () => {
        cy.assertMobileMenuVisible()
      })
    })
  })
})
