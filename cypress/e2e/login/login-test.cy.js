//
/// <reference types="cypress" />

describe('testes de login', () => {
    before(() => {
      cy.visit('http://webdriveruniversity.com/Login-Portal/index.html?')
    })

    it('Deve verificar se a pagina foi carregada corretamente', () => {
        cy.get('#text').should('be.visible');
        cy.get('#password').should('be.visible');
        cy.get('#login-button').should('not.be.disabled');
    })

    it('Deve aceitar tentativa de login valida', () => {
        cy.get('#text').type('webdriver');
        cy.get('#password').type('webdriver123')
        cy.get('#login-button').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('validation succeeded')
          })
    })

    it('Nao deve aceitar tentativa de login invalida', () => {
        cy.get('#text').type('enosdoido');
        cy.get('#password').type('enosdoido123')
        cy.get('#login-button').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('validation failed')
          })
    })
})  