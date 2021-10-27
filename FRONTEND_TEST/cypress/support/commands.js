/// <reference types="cypress" />

///////////////////
//Comandos de login
///////////////////

Cypress.Commands.add("login", () => {

    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")
    cy.get("#login-button").click()
    cy.url().should("contain", "/inventory")   
})

Cypress.Commands.add("loginUsuarioErrado", () => {

    cy.get("#user-name").type("cleitinho")
    cy.get("#password").type("secret_sauce")
    cy.get("#login-button").click()
    cy.get("[data-test=error]")   
})

Cypress.Commands.add("loginSenhaErrada", () => {

    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("spiderman")
    cy.get("#login-button").click()
    cy.get("[data-test=error]")
})

///////////////////////
//Comandos de Inventory
///////////////////////

//Seção de ordenação

Cypress.Commands.add("selecaoOrdenacao", (valor) => {

    cy.get("[data-test=product_sort_container]").select(valor)
    
})

// Cypress.Commands.add("selecaoOrdenacaoErrada", (valor) => {
//  cy.get()
// })

//Seção de navegação do menu

Cypress.Commands.add("menuSobre", () => {
    cy.get("#react-burger-menu-btn").click();
    cy.get("#about_sidebar_link").click()
    cy.url().should("contain", "saucelabs")
    
})

Cypress.Commands.add("menuLogout", () => {
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").click()
    cy.url().should("contain", "saucedemo")
    
})


