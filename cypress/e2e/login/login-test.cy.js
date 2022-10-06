//
/// <reference types="cypress" />

describe('testes de login', () => {
    beforeEach(() => {
      cy.visit('http://webdriveruniversity.com/Login-Portal/index.html?')
    })

    it('Deve verificar se a pagina foi carregada corretamente', () => {
        cy.get('#text').should('be.visible');
        cy.get('#password').should('be.visible');
        cy.get('#login-button').should('not.be.disabled');
    })
})  