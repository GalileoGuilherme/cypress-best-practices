Cypress.Commands.add('visitAsMobile', (device, url = '/') => {
  cy.viewport(device)
  cy.visit(url)
})

Cypress.Commands.add('validateMobileMenu', () => {
  cy.get('.navbar-toggle').should('be.visible').click()
  cy.get('a[href="/login"]').should('be.visible')
})

Cypress.Commands.add('validateMainContent', () => {
  cy.get('.active > :nth-child(1) > h2')
    .should('contain.text', 'Full-Fledged practice website for Automation Engineers')
})

Cypress.Commands.add('assertMobileViewIsVisible', () => {
  cy.get('.active > :nth-child(1) > h2').should('be.visible')
});

Cypress.Commands.add('assertMainContent', () => {
  cy.get('.active > :nth-child(1) > h2')
    .should('contain.text', 'Full-Fledged practice website for Automation Engineers');
});

Cypress.Commands.add('assertMobileMenuVisible', () => {
  cy.get('.active > :nth-child(1) > .test_cases_list > .btn').should('be.visible');
});


